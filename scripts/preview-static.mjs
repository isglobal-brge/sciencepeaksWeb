import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { realpath, stat } from 'node:fs/promises'
import { extname, join, resolve, sep } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { createGzip } from 'node:zlib'

const root = await realpath(resolve(process.cwd(), 'out'))
const port = Number(process.env.PORT || 4183)
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error('PORT must be an integer between 0 and 65535.')
}

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
}
const compressible = new Set(['.html', '.js', '.mjs', '.css', '.json', '.webmanifest', '.txt', '.svg', '.xml'])
const insideRoot = path => path === root || path.startsWith(root + sep)

function acceptsGzip(header = '') {
  const encodings = String(header).split(',').map(value => {
    const [name, ...parameters] = value.trim().toLowerCase().split(';')
    const quality = parameters.find(parameter => /^\s*q\s*=/.test(parameter))
    return { name, quality: quality ? Number(quality.split('=')[1].trim()) : 1 }
  })
  const choice = encodings.find(item => item.name === 'gzip')
    ?? encodings.find(item => item.name === '*')
  return Boolean(choice && choice.quality > 0 && choice.quality <= 1)
}

function reply(request, response, status, message) {
  response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end(request.method === 'HEAD' ? undefined : message + '\n')
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD')
    reply(request, response, 405, 'Method not allowed')
    return
  }

  try {
    const rawPath = (request.url || '/').split('?')[0]
    const path = decodeURIComponent(rawPath)
    if (!path.startsWith('/') || path.startsWith('//') || path.includes('\0') || path.includes('\\')) {
      reply(request, response, 400, 'Invalid path')
      return
    }
    let file = resolve(root, '.' + path)
    if (path.split('/').includes('..') || !insideRoot(file)) {
      reply(request, response, 403, 'Forbidden')
      return
    }

    let info = await stat(file)
    if (!insideRoot(await realpath(file))) {
      reply(request, response, 403, 'Forbidden')
      return
    }
    if (info.isDirectory()) {
      if (!rawPath.endsWith('/')) {
        const query = (request.url || '').slice(rawPath.length)
        response.writeHead(308, { Location: rawPath + '/' + query })
        response.end()
        return
      }
      file = join(file, 'index.html')
      info = await stat(file)
    }
    if (!info.isFile() || !insideRoot(await realpath(file))) {
      reply(request, response, 404, 'Not found')
      return
    }

    const extension = extname(file).toLowerCase()
    const gzip = compressible.has(extension) && acceptsGzip(request.headers['accept-encoding'])
    response.setHeader('Content-Type', mime[extension] || 'application/octet-stream')
    if (compressible.has(extension)) response.setHeader('Vary', 'Accept-Encoding')
    if (gzip) response.setHeader('Content-Encoding', 'gzip')
    else response.setHeader('Content-Length', info.size)
    response.writeHead(200)
    if (request.method === 'HEAD') { response.end(); return }
    await pipeline(createReadStream(file), ...(gzip ? [createGzip()] : []), response)
  } catch (error) {
    if (response.headersSent) { response.destroy(); return }
    if (error instanceof URIError) reply(request, response, 400, 'Invalid path')
    else if (error.code === 'ENOENT' || error.code === 'ENOTDIR') reply(request, response, 404, 'Not found')
    else reply(request, response, 500, 'Server error')
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`http://127.0.0.1:${server.address().port}`)
})

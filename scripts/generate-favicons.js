const fs = require('fs');
const path = require('path');

console.log('🎨 Favicon Generator for SciencePeaks\n');

// Check what favicon files already exist
const publicDir = path.join(process.cwd(), 'public');
const faviconFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png'
];

faviconFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  const exists = fs.existsSync(filePath);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

if (fs.existsSync(path.join(publicDir, 'logo.svg'))) {
  console.log(`✅ logo.svg (source file)`);
} else {
  console.log(`❌ logo.svg (source file) - WARNING: Source file missing!`);
}

console.log(`
💡 TIP: Your current setup with logo.svg as favicon will work perfectly in modern browsers!
The SVG favicon provides the best quality and is vector-based.

The additional PNG/ICO files are only needed for:
- Legacy browser support (IE, older Safari)
- Better PWA integration
- Platform-specific optimizations

🚀 To update your layout with additional favicon sizes, edit app/layout.tsx after generating the files.
`);

// Provide code snippet for updating layout
console.log(`
📝 EXAMPLE CODE for app/layout.tsx after generating files:

icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/logo.svg", type: "image/svg+xml" },
  ],
  shortcut: "/favicon.ico",
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  other: [
    {
      rel: "mask-icon",
      url: "/logo.svg",
      color: "#1e3d83",
    },
  ],
},
`);

module.exports = { faviconFiles, publicDir }; 
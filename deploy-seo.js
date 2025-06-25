const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting SEO-optimized deployment...\n');

// Function to check if directory exists
const directoryExists = (dirPath) => {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
};

// Function to validate HTML meta tags
const validateMetaTags = () => {
  console.log('📋 Validating meta tags in HTML files...');
  
  const docsDir = path.join(process.cwd(), 'docs');
  if (!directoryExists(docsDir)) return;
  
  const findHtmlFiles = (dir) => {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        results = results.concat(findHtmlFiles(filePath));
      } else if (file.endsWith('.html')) {
        results.push(filePath);
      }
    }
    return results;
  };
  
  const htmlFiles = findHtmlFiles(docsDir);
  
  for (const htmlFile of htmlFiles) {
    const content = fs.readFileSync(htmlFile, 'utf8');
    const fileName = path.relative(docsDir, htmlFile);
    
    // Check for essential meta tags
    const hasTitle = /<title[^>]*>/.test(content);
    const hasDescription = /<meta[^>]+name=["']description["'][^>]*>/.test(content);
    const hasViewport = /<meta[^>]+name=["']viewport["'][^>]*>/.test(content);
    const hasOG = /<meta[^>]+property=["']og:/.test(content);
    const hasCanonical = /<link[^>]+rel=["']canonical["'][^>]*>/.test(content);
    
    console.log(`📄 ${fileName}:`);
    console.log(`  Title: ${hasTitle ? '✅' : '❌'}`);
    console.log(`  Description: ${hasDescription ? '✅' : '❌'}`);
    console.log(`  Viewport: ${hasViewport ? '✅' : '❌'}`);
    console.log(`  Open Graph: ${hasOG ? '✅' : '❌'}`);
    console.log(`  Canonical: ${hasCanonical ? '✅' : '❌'}`);
  }
};

// Function to optimize HTML files
const optimizeHtmlFiles = () => {
  console.log('\n🔧 Optimizing HTML files...');
  
  const docsDir = path.join(process.cwd(), 'docs');
  if (!directoryExists(docsDir)) return;
  
  const findHtmlFiles = (dir) => {
    let results = [];
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        results = results.concat(findHtmlFiles(filePath));
      } else if (file.endsWith('.html')) {
        results.push(filePath);
      }
    }
    return results;
  };
  
  const htmlFiles = findHtmlFiles(docsDir);
  
  for (const htmlFile of htmlFiles) {
    let content = fs.readFileSync(htmlFile, 'utf8');
    const originalSize = content.length;
    
    // Add preload hints for critical resources
    const headEndRegex = /<\/head>/i;
    if (headEndRegex.test(content)) {
      const preloadHints = `
    <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml">
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
  </head>`;
      
      content = content.replace(headEndRegex, preloadHints);
    }
    
    // Remove excessive whitespace (simple minification)
    content = content
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
    
    fs.writeFileSync(htmlFile, content);
    
    const newSize = content.length;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`  ✅ ${path.relative(docsDir, htmlFile)} - Saved ${savings}%`);
  }
};

// Function to check image optimization
const checkImageOptimization = () => {
  console.log('\n🖼️ Checking image optimization...');
  
  const docsDir = path.join(process.cwd(), 'docs');
  if (!directoryExists(docsDir)) return;
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp'];
  const checkDirectory = (dir) => {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const sizeKB = (stat.size / 1024).toFixed(1);
          const relativePath = path.relative(docsDir, filePath);
          
          let status = '✅';
          if (stat.size > 1024 * 1024) { // > 1MB
            status = '⚠️ Large file';
          } else if (stat.size > 500 * 1024) { // > 500KB
            status = '⚠️ Consider optimizing';
          }
          
          console.log(`  ${status} ${relativePath} (${sizeKB} KB)`);
        }
      }
    }
  };
  
  checkDirectory(docsDir);
};

// Function to validate sitemap and robots.txt
const validateSEOFiles = () => {
  console.log('\n🕷️ Validating SEO files...');
  
  const docsDir = path.join(process.cwd(), 'docs');
  
  // Check sitemap.xml
  const sitemapPath = path.join(docsDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    console.log('  ✅ sitemap.xml found');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    console.log(`     - Contains ${urlCount} URLs`);
  } else {
    console.log('  ❌ sitemap.xml not found');
  }
  
  // Check robots.txt
  const robotsPath = path.join(docsDir, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    console.log('  ✅ robots.txt found');
  } else {
    console.log('  ❌ robots.txt not found');
  }
  
  // Check manifest.json
  const manifestPath = path.join(docsDir, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    console.log('  ✅ manifest.json found');
  } else {
    console.log('  ❌ manifest.json not found');
  }
};

// Main deployment function
const deploy = async () => {
  try {
    console.log('1️⃣ Building the application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('\n2️⃣ Cleaning docs directory...');
    if (directoryExists('docs')) {
      execSync('rm -rf docs', { stdio: 'inherit' });
    }
    
    console.log('\n3️⃣ Moving build output to docs...');
    execSync('mv out docs', { stdio: 'inherit' });
    
    console.log('\n4️⃣ Copying public assets...');
    execSync('cp -r public/* docs/', { stdio: 'inherit' });
    
    console.log('\n5️⃣ Setting up GitHub Pages...');
    fs.writeFileSync('docs/CNAME', 'www.sciencepeaks.ai');
    fs.writeFileSync('docs/.nojekyll', '');
    
    // SEO optimizations
    validateMetaTags();
    optimizeHtmlFiles();
    checkImageOptimization();
    validateSEOFiles();
    
    console.log('\n6️⃣ Committing changes...');
    execSync('git add docs/', { stdio: 'inherit' });
    execSync('git commit -m "chores: deploy website with SEO optimizations"', { stdio: 'inherit' });
    
    console.log('\n7️⃣ Pushing to GitHub...');
    execSync('git push', { stdio: 'inherit' });
    
    console.log('\n🎉 Deployment completed successfully!');
    console.log('📊 Your site should be available at: https://www.sciencepeaks.ai');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
};

// Run deployment
deploy(); 
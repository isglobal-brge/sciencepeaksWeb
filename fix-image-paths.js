// Script to help check and fix image paths
const fs = require('fs');
const path = require('path');

// Function to check if a directory exists
const directoryExists = (dirPath) => {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
};

// Function to check if public images exist in the build output
const checkPublicImages = () => {
  console.log('Checking for public images in build output...');
  
  // List files in public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!directoryExists(publicDir)) {
    console.log('❌ Public directory not found!');
    return;
  }
  
  const publicFiles = fs.readdirSync(publicDir);
  console.log(`Found ${publicFiles.length} files in public directory:`);
  publicFiles.forEach(file => {
    if (file !== '.DS_Store' && !file.startsWith('.')) {
      console.log(`- ${file}`);
    }
  });
  
  // Check if these files made it to the out directory
  const outDir = path.join(process.cwd(), 'out');
  if (!directoryExists(outDir)) {
    console.log('❌ Out directory not found! Did you run next build?');
    return;
  }
  
  console.log('\nChecking if public files exist in out directory:');
  publicFiles.forEach(file => {
    if (file !== '.DS_Store' && !file.startsWith('.')) {
      const outFilePath = path.join(outDir, file);
      if (fs.existsSync(outFilePath)) {
        console.log(`✅ ${file} found in out directory`);
      } else {
        console.log(`❌ ${file} NOT found in out directory`);
      }
    }
  });
  
  // Check if public files exist in docs directory (if present)
  const docsDir = path.join(process.cwd(), 'docs');
  if (directoryExists(docsDir)) {
    console.log('\nChecking if public files exist in docs directory:');
    publicFiles.forEach(file => {
      if (file !== '.DS_Store' && !file.startsWith('.')) {
        const docsFilePath = path.join(docsDir, file);
        if (fs.existsSync(docsFilePath)) {
          console.log(`✅ ${file} found in docs directory`);
        } else {
          console.log(`❌ ${file} NOT found in docs directory`);
        }
      }
    });
  }
};

// Function to check the HTML files for image paths
const checkHtmlImagePaths = () => {
  console.log('\nChecking image paths in HTML files...');
  
  const docsDir = path.join(process.cwd(), 'docs');
  if (!directoryExists(docsDir)) {
    console.log('❌ Docs directory not found! Did you run the deploy script?');
    return;
  }
  
  // Find all HTML files recursively
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
  console.log(`Found ${htmlFiles.length} HTML files to check`);
  
  for (const htmlFile of htmlFiles) {
    console.log(`\nExamining ${path.relative(process.cwd(), htmlFile)}:`);
    
    let content = fs.readFileSync(htmlFile, 'utf8');
    
    // Check for img tags with src attributes
    const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
    let match;
    while ((match = imgSrcRegex.exec(content)) !== null) {
      const src = match[1];
      console.log(`- Image src: ${src}`);
      
      // Look for potential path issues
      if (!src.startsWith('/') && !src.startsWith('http') && !src.startsWith('data:')) {
        console.log(`  ⚠️ WARNING: Relative path detected - ${src}`);
      }
    }
  }
};

// Function to ensure all files from public are copied to docs
const copyPublicToDocs = () => {
  console.log('\nCopying all public files to docs directory...');
  
  const publicDir = path.join(process.cwd(), 'public');
  const docsDir = path.join(process.cwd(), 'docs');
  
  if (!directoryExists(publicDir)) {
    console.log('❌ Public directory not found!');
    return;
  }
  
  if (!directoryExists(docsDir)) {
    console.log('❌ Docs directory not found! Did you run the deploy script?');
    return;
  }
  
  const publicFiles = fs.readdirSync(publicDir);
  
  publicFiles.forEach(file => {
    if (file !== '.DS_Store' && !file.startsWith('.')) {
      const sourcePath = path.join(publicDir, file);
      const destPath = path.join(docsDir, file);
      
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Copied ${file} to docs directory`);
      } catch (err) {
        console.log(`❌ Error copying ${file}: ${err.message}`);
      }
    }
  });
  
  console.log('\nDone! You should now commit and push the updated docs folder.');
};

// Run the functions
console.log('============================================');
console.log('Image Path Checker and Fixer');
console.log('============================================\n');

checkPublicImages();
checkHtmlImagePaths();

// Ask if user wants to copy public files to docs
console.log('\nWould you like to copy all public files to the docs directory?');
console.log('This can help fix missing images. (Type "yes" to proceed)');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('> ', (answer) => {
  if (answer.toLowerCase() === 'yes') {
    copyPublicToDocs();
  } else {
    console.log('Operation canceled.');
  }
  readline.close();
}); 
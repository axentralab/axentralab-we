const fs = require('fs');
const path = require('path');

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    // Replace \` with `
    content = content.replace(/\\`/g, '`');
    // Replace \$ with $
    content = content.replace(/\\\$/g, '$');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  } catch (err) {
    console.error('Error fixing', filePath, err);
  }
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      fixFile(fullPath);
    }
  }
};

walk(path.join(__dirname, 'frontend/src'));
console.log('Done fixing escapes!');

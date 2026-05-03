const fs = require('fs');
const path = require('path');

const targetFiles = [
  'PortfolioPage.js',
  'CaseStudiesPage.js',
  'TeamPage.js',
  'PricingPage.js',
  'BlogPage.js',
  'BlogPostPage.jsx',
  'MeetingWithCEOPage.js',
  'HostingPage.js',
  'ReferralPage.js',
  'SupportPage.js',
  'ProductsPage.js',
  'CartPage.js',
  'CheckoutPage.js',
  'ClientPortalPage.js',
  'MaintenancePage.js',
  'NotFoundPage.js',
  'OrderSuccessPage.js'
];

const PAGES_DIR = path.join(__dirname, 'frontend/src/pages');

function refactorFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath} - not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Colors
  content = content.replace(/'#00d4aa'/gi, "'var(--teal)'");
  content = content.replace(/"#00d4aa"/gi, '"var(--teal)"');
  content = content.replace(/'#fff'/gi, "'var(--text)'");
  content = content.replace(/"#fff"/gi, '"var(--text)"');
  content = content.replace(/'#ffffff'/gi, "'var(--text)'");
  content = content.replace(/"#ffffff"/gi, '"var(--text)"');
  
  // Backgrounds
  content = content.replace(/'#0a0c14'/gi, "'var(--bg)'");
  content = content.replace(/"#0a0c14"/gi, '"var(--bg)"');
  content = content.replace(/'#0f172a'/gi, "'var(--bg)'");
  content = content.replace(/"#0f172a"/gi, '"var(--bg)"');
  content = content.replace(/'#0d1117'/gi, "'var(--bg)'");
  content = content.replace(/"#0d1117"/gi, '"var(--bg)"');
  content = content.replace(/'#1e293b'/gi, "'var(--bg2)'");
  content = content.replace(/"#1e293b"/gi, '"var(--bg2)"');
  
  // rgba replacements
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.0[2345]\)/g, 'var(--bg2)');
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.[1-3]\)/g, 'var(--border)'); // 0.1, 0.2, 0.3 for borders or faint bg
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.[456]\)/g, 'var(--muted)'); // 0.4, 0.5, 0.6 for text
  content = content.replace(/rgba\(255,\s*255,\s*255,\s*0\.[789]\)/g, 'var(--text)');  // 0.7, 0.8, 0.9 for text
  
  // Specific border colors
  content = content.replace(/borderColor:\s*['"]rgba\(255,255,255,0\.\d+['"]/gi, "borderColor: 'var(--border)'");
  
  // Font families (since it's a corporate theme now)
  content = content.replace(/'Poppins',sans-serif/gi, 'var(--font-h)');
  content = content.replace(/'Sora',sans-serif/gi, 'var(--font-h)');
  content = content.replace(/'Inter',sans-serif/gi, 'var(--font-m)');
  content = content.replace(/'Space Mono',monospace/gi, 'var(--font-m)');
  
  // Clean up any double quotes inside single quotes if they happen, but above replacements are safe.

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored ${path.basename(filePath)}`);
  } else {
    console.log(`No changes needed for ${path.basename(filePath)}`);
  }
}

targetFiles.forEach(file => {
  refactorFile(path.join(PAGES_DIR, file));
});

console.log('Theme refactor complete!');

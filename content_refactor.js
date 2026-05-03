const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'frontend/src/pages');
const COMPONENTS_DIR = path.join(__dirname, 'frontend/src/components');

const replacements = [
  { regex: /Head of Cybersecurity/gi, replacement: 'Head of Engineering' },
  { regex: /\bCybersecurity\b/g, replacement: 'Cloud Infrastructure' },
  { regex: /\bcybersecurity\b/g, replacement: 'cloud infrastructure' },
  { regex: /cyber threats/gi, replacement: 'performance bottlenecks' },
  { regex: /Security Audit/gi, replacement: 'Infrastructure Audit' },
  { regex: /Security-obsessed/gi, replacement: 'Performance-obsessed' },
  { regex: /Security Expert/gi, replacement: 'Cloud Expert' },
  { regex: /Malware removal & full cleanup/gi, replacement: 'Performance optimization & cleanup' },
  { regex: /Malware scanning/gi, replacement: 'Performance profiling' },
  { regex: /Malware removal/gi, replacement: 'Performance optimization' },
  { regex: /Malware/gi, replacement: 'Bugs' },
  { regex: /Penetration testing/gi, replacement: 'Load testing' },
  { regex: /Pen testing/gi, replacement: 'Load testing' },
  { regex: /Penetration tests/gi, replacement: 'Load tests' },
  { regex: /Threat detection/gi, replacement: 'Uptime monitoring' },
  { regex: /Threat monitoring/gi, replacement: 'Uptime monitoring' },
  { regex: /Threat intelligence/gi, replacement: 'Performance analytics' },
  { regex: /Threats/gi, replacement: 'Downtime' },
  { regex: /Web Application Firewall \(WAF\) setup/gi, replacement: 'Global CDN setup & configuration' },
  { regex: /WAF setup/gi, replacement: 'CDN setup' },
  { regex: /Server security hardening/gi, replacement: 'Server performance tuning' },
  { regex: /Vulnerability Check/gi, replacement: 'Code Quality Check' },
  { regex: /Vulnerability detection/gi, replacement: 'Performance bottleneck detection' },
  { regex: /OWASP-based vulnerability scan/gi, replacement: 'Lighthouse-based performance scan' },
  { regex: /OWASP scan/gi, replacement: 'Lighthouse scan' },
  { regex: /OWASP Top 10/gi, replacement: 'Core Web Vitals' },
  { regex: /\bOWASP\b/g, replacement: 'Web Vitals' },
  { regex: /API & SaaS security testing/gi, replacement: 'API & SaaS load testing' },
  { regex: /Monthly security report/gi, replacement: 'Monthly performance report' },
  { regex: /Security header analysis/gi, replacement: 'SEO header analysis' },
  { regex: /SSL certificate check/gi, replacement: 'Domain health check' },
  { regex: /Auto IP blocking/gi, replacement: 'Auto scaling alerts' },
  { regex: /Incident reports/gi, replacement: 'Uptime reports' },
  { regex: /Session & auth bypass tests/gi, replacement: 'User journey automated tests' },
  { regex: /Executive \+ dev reports/gi, replacement: 'Performance + dev reports' },
  { regex: /WP Shield/gi, replacement: 'WP Accelerate' },
  { regex: /WordPress Security plugin/gi, replacement: 'WordPress Optimization plugin' },
  { regex: /WordPress Security/gi, replacement: 'WordPress Optimization' },
  { regex: /SiteGuard/gi, replacement: 'SiteMonitor' },
  { regex: /Site-Guard/gi, replacement: 'Site-Monitor' },
  { regex: /PenBot/gi, replacement: 'LoadBot' },
  { regex: /Automated Pentesting/gi, replacement: 'Automated Load Testing' },
  { regex: /PhishNet/gi, replacement: 'MailFlow' },
  { regex: /Email Security/gi, replacement: 'Email Deliverability' },
  { regex: /phishing detection/gi, replacement: 'bounce detection' },
  { regex: /email threat intelligence/gi, replacement: 'email deliverability analytics' },
  { regex: /Spoofed domain alerts/gi, replacement: 'DNS misconfiguration alerts' },
  { regex: /Employee risk scoring/gi, replacement: 'Campaign engagement scoring' },
  { regex: /Automated quarantine/gi, replacement: 'Automated list cleaning' },
  { regex: /protects your team inbox before the damage is done/gi, replacement: 'ensures your emails reach the inbox securely' },
  { regex: /হ্যাক/g, replacement: 'স্লো' }, // Bengali hack -> slow
  { regex: /হ্যাকার/g, replacement: 'বাগ' }, // Bengali hacker -> bug
  { regex: /hackers/gi, replacement: 'bugs' },
  { regex: /Security Analyst/gi, replacement: 'DevOps Analyst' },
  { regex: /Handles vulnerabilities/gi, replacement: 'Handles infrastructure' },
  { regex: /Business Security Pack/gi, replacement: 'Business Scaling Pack' },
  { regex: /Full protection for live businesses/gi, replacement: 'Full scaling for live businesses' }
];

function refactorContent(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    if (fs.statSync(fullPath).isDirectory()) {
      refactorContent(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;

      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated content in ${path.basename(fullPath)}`);
      }
    }
  }
}

refactorContent(PAGES_DIR);
refactorContent(COMPONENTS_DIR);
console.log('Content refactor complete!');

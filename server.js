const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function openBrowser(targetUrl) {
  if (process.platform === 'win32') {
    // Windows: start "" "url" reliably launches the default browser
    exec(`start "" "${targetUrl}"`, (err) => {
      if (err) {
        exec(`powershell -NoProfile -Command "Start-Process '${targetUrl}'"`);
      }
    });
  } else if (process.platform === 'darwin') {
    exec(`open "${targetUrl}"`);
  } else {
    exec(`xdg-open "${targetUrl}"`);
  }
}

function startServer(portToUse) {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    if (reqUrl === '/') reqUrl = '/index.html';

    const filePath = path.join(PUBLIC_DIR, reqUrl);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>404 Not Found</h1><p>The requested file does not exist.</p>');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const activeUrl = `http://localhost:${portToUse}`;
      console.log(`\n======================================================`);
      console.log(`  🛺 TRAVEL INDIA - PORT ${portToUse} ALREADY ACTIVE`);
      console.log(`======================================================`);
      console.log(`  An existing instance or service is already on port ${portToUse}.`);
      console.log(`  `);
      console.log(`  👉 CLICK TO OPEN YOUR BROWSER:`);
      console.log(`     ${activeUrl}`);
      console.log(`     http://127.0.0.1:${portToUse}`);
      console.log(`  `);
      console.log(`  Attempting to launch browser now...`);
      console.log(`======================================================\n`);
      openBrowser(activeUrl);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(portToUse, () => {
    const url = `http://localhost:${portToUse}`;
    console.log(`\n======================================================`);
    console.log(`  🛺 TRAVEL INDIA - Open Mobility & Tours Web Platform`);
    console.log(`======================================================`);
    console.log(`  Status  : Server is running successfully!`);
    console.log(`  `);
    console.log(`  👉 CLICKABLE LINK (Ctrl + Click to Open):`);
    console.log(`     ${url}`);
    console.log(`     http://127.0.0.1:${portToUse}`);
    console.log(`  `);
    console.log(`  (Opening in your default browser automatically...)`);
    console.log(`  Local   : Press Ctrl+C in this terminal to stop`);
    console.log(`======================================================\n`);

    openBrowser(url);
  });
}

startServer(PORT);

const http = require('http');

http.createServer((req, res) => {
  res.write('Hello, World!');
  res.end();
}).listen(80, () => {
  console.log('Server listening on port 80 (may require root access)');
});

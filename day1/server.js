const http = require('http');

http.createServer(function (req, res) {
    // res.writeHead(200,{'Content-Type':'text/html'})
    res.end("hello namrata");
}).listen(5000, '127.0.0.1', () => {
    console.log('Server is running at http://localhost:5000');
});

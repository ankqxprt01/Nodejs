const http = require('http');
const fs = require('fs');
const path = require('path');

// .resolve() It resolves a sequence of paths into a single absolute path.
const videoPath = path.resolve(__dirname,'demo-video.mp4');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(videoPath);

  // response headers for video streaming 
  res.writeHead(200, { // 200 for ok status
    'Content-Type': 'video/mp4',
  });

  //total size of streamed chunks
  let totalSize = 0;

  // The .pipe() method streams the video in chunks to the response
  stream.pipe(res);

  // Listen for the 'data' event to track the size of each chunk
  stream.on('data', (chunk) => {
    // adds the total size of chunks
    totalSize = totalSize+ chunk.length;

    // Log size of each chunk
    console.log(`Sent chunk of size: ${chunk.length} bytes`);

    // after sent check for total that means sent+sent=total
    console.log(`Total streamed so far: ${totalSize} bytes`);
  });
  // Handle errors in reading the file
  stream.on('error', (err) => {
    console.error('Error reading file:', err);
    res.writeHead(500); // 500 for internal http error
    res.end('Internal Server Error');
  });

  // final total size once the stream ends
  stream.on('end', () => {
    console.log(`Total size of video streamed: ${totalSize} bytes`);
  });
});

server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});

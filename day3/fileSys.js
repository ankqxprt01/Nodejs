const fs = require('fs');
// Asynchronous
// read file                       remove utf and run
// fs.readFile('./filesystem.txt','utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Synchronous
// const data = fs.readFileSync('./filesystem.txt', 'utf8');
// console.log(data);

// -------------------------------------
// write file creates new file and also overwrites ur existing code
// async
// fs.writeFile('./example.txt', 'hello world', (err) => {
//   if (err) throw err;
//   console.log('File written!');
// });

// Synchronous
// fs.writeFileSync('example.txt', 'Hello, world how!');
// -------------------------------------
// add file
// append file if exists override if not will add new file
// fs.appendFile('example2.txt', 'hello namrata', (err) => {
//   if (err) throw err;
//   console.log("added to new file");
// });

// -------------------------------------
// delete file
// fs.unlink('example.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// -------------------------------------
// Read contents
// fs.readdir('../', (err, files) => {
//   if (err) throw err;
//   console.log(files);
// });

// Create directory
// -------------------------------------
// fs.mkdir('fileSystem', (err) => {
//   if (err) throw err;
//   console.log("added folder");
// });

// Remove a directory
// -------------------------------------
// fs.rmdir('fileSystem', (err) => {
//   if (err) throw err;
//   console.log("removed folder");
// });

// to access any file
// fs.access('example2.txt', fs.constants.F_OK, (err) => {
//   console.log(err ? 'Does not exist' : 'Exists');
// });


// files with promise async await
// const fsPromises = require('fs/promises');

// async function readFileAsync() {
//   try {
//     const data = await fsPromises.readFile('example2.txt','utf-8');
//     console.log(data);
//   }
//    catch (err) {
//     console.error(err);
//   }
// }
// readFileAsync()

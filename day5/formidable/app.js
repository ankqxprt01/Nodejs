let http = require("http");
let fs = require("fs");
let formidable = require("formidable"); // npm install formidable type in terminal

http.createServer(function (req, res) {
  if (req.url === "/upload" && req.method === "POST") {
    let form = new formidable.IncomingForm();
    console.log(form);
    console.log(typeof(form));
    
    form.on("fileBegin", function ( name,file) {
      file.filepath = __dirname + "/uploads/" + file.originalFilename;
    });

    form.on("file", function () {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("File uploaded successfully");
      res.end();
      console.log("Uploaded in uploads folder");
    });

    form.on("error", function (err) {
      console.error("Formidable Error:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });// 500 internal error
      res.write("Upload failed");
      res.end();
    });

    form.parse(req);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });// 200 ok success
    let html = fs.readFileSync("index.html");
    res.write(html);
    res.end();
  }
}).listen(5000, () => {
  console.log("Running on http://localhost:5000");
});

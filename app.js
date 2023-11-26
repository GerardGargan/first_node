const http = require("http");
const PORT = 3000;

const fs = require('fs');
const htmlfile = fs.readFileSync(__dirname + "html/hellonode.html");

const server = http.createServer((req,res) => {
    console.log("request starting...");
    res.setHeader("Content-Type", "text/html");
    res.write(htmlfile);
    res.end();
});

server.listen(PORT, (err) => {
    if(err){
        return console.log(err);
    }

    console.log("Node web server listening on post http://localhost:"+PORT);
})
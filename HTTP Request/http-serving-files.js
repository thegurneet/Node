const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
    if(request.url === '/'){
        fs.readFile('server.js','UTF-8',(err,data)=>{
            response.writeHead(200,{'Content-Type': 'text'});
            response.end(data);
        })
    } else { 
        response.writeHead(404,{'Content-Type': 'text'}); 
        response.end('404 found')
    }




}).listen(3000);
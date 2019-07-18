const http = require('http');

const server = http.createServer((request,response)=>{

    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.end('Gurneet Checking in'); 
}).listen(3000,()=>{
    console.log('server working')
});
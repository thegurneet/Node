const https = require('https');
const http = require('http');
const fs = require('fs');

const url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';

http.createServer((request,serverRes)=>{

    if(request.method === 'GET'){
        https.get(url, (httpRes)=>{
            httpRes.on('data',data=>{
                httpRes.setEncoding('UTF-8');
                console.log(data);
            })
        })
    }


}).listen(3000,()=>{
    console.log('Server Sprinting')
});
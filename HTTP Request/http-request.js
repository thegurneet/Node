const https = require('https');
const fs = require('fs');

const url = 'https://api.chucknorris.io/jokes/random'; 

https.get(url,(res)=>{
    let body = '';
    res.on('data', (data)=>{
        body += data; 
    })

    res.on('end',()=>{
        fs.writeFile('data.json','utf8',(err)=>{
            if(err) return err;
        });
    })

})
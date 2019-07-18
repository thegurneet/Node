const express = require('express');
let app = express(); 
const port = process.env.PORT || 9999;


app.get('/',(req,res)=>{
    res.send('<h1> Hello world</h1>')
})

app.get('/api',(req,res)=>{
   // res.send('<h1>API PAGE</h1>')
    res.json({name:'Gurneet'})
})


app.listen(port, ()=>{
    console.log('server running on ' + port);
})

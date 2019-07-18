const express = require('express');
let app = express(); 
const port = process.env.PORT || 9999;



app.get('/post/:id',(req,res)=>{
    res.send(`
        
        <h1> here is ${req.params.id}</h1>
    
    `);
})


app.listen(9999,()=>{
    console.log(`server running on ${port}`)
})


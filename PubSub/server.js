const express = require('express'); 
const bodyParser = require('body-parser');


let app = express(); 

    app.use(bodyParser.text());
    app.use(bodyParser.urlencoded({extended:false}));
   
   app.post('/post', (req,res)=>{
    
    console.log(req.body);
})


app.listen(3000, ()=>{
    console.log('Server runnning on 3000')
}); 


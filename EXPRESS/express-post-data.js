const express = require('express');
const bodyParser = require('body-parser');
let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/assests', express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  console.log('MIDDLEWARE');
  next();
})

app.post('/post', (req,res)=>{
    console.log(JSON.stringify(req.body));
})

app.listen(9000, ()=>{
  console.log('listening to server 9000')
})

const express = require('express');

let app = express();

//when the code hits /css it will server the static files inside of public
app.use('/css', express.static(__dirname + '/public'));

app.use((req,res,next)=>{
  console.log('MiddleWare');
  next();
})

app.get('/', (req,res)=>{
  res.send(`
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="/css/style.css">
        <title></title>
      </head>
      <body>
            <h1> HelloWorld</h1>
      </body>
    </html>
    `);
  console.log(__dirname + '/public')
})


app.listen(9000, ()=>{
  console.log('server running 9000');
})

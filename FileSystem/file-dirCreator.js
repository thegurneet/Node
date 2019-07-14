const fs = require('fs');


//directory creator
if(!fs.exists('views',()=>{

    fs.mkdir('views',(err)=>{
        if(err) return err;
        fs.writeFile('./views/data.txt', 'made a new file inside a file', (err)=>{
            if(err) return err;
        })
    });
}));

 




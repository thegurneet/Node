const fs = require('fs');


//writing/creating a new file with content 
fs.writeFile('data.txt', "I've just created this data.txt file. WOOP", (err)=>{
    if(err) return err;
})


fs.appendFile('data.txt',"\n\n I've just added this stuff on",(err)=>{
    if(err) return err;
})
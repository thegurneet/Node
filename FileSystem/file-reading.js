const fs = require('fs');


// displays all the current files in the folder
fs.readdir('.',(err,content)=>{
     if(err)return err;
     console.log(content);
}); 

// displays all cotent in folder SampleText
fs.readFile('sampleText.txt', 'UTF-8', (err,content)=>{
    if(err)return err;
    console.log(content);
});
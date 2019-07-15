const fs = require('fs');


//removing a directory 

try  { 
    fs.rmdirSync('./newDir');

} catch (err){
    console.log(err + ' : here is the error');
}

//remove file
//fs.unlinkSync('removeMe.txt')
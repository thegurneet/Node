const fs = require('fs');
const path = require('path')

let reqPath = path.join(__dirname, 'values.json')

const values =()=> new Promise((resolve,reject)=>{
    fs.readFile(reqPath,'utf8',(err,content)=>{
        if(err) return err;
        resolve(JSON.parse(content))
    })
});

values().then((data)=>{
    tryMe(data);
})

function tryMe(data){
    var output= [];
    for(var i =0; i < data.length; i++){
        console.log(data[i].sort())
        var v = 
            {
                min: data[i].sort()[i],
                max: data[i].sort()[data[i].length-1]
            }
            output.push(v)
            console.log(output)

    }
}
const fs = require('fs'); 
const path = require('path'); 

const getProductsFromFile = (cb)=>{
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

    fs.readFile(p, (err,data)=>{
        if(err){
            cb([]);
        } 
        cb (JSON.parse(data));
    })
}

 class Product { 
    constructor(t){
        this.title = t; 
    }

    save(){
        getProductsFromFile(products=> { 
            
        });
        fs.readFile(p , (err,data)=>{
            let products = []; 
            if(!err) { 
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err)
            });
            console.log(data )
        })

    }

    static fetchAll(cb){
        getProductsFromFile(cb)

    }

}

module.exports =  Product;



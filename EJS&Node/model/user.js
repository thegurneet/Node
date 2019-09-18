const fs = require('fs'); 
const path = require('path'); 

const users = []; 

class User { 
    constructor(name) { 
        this.userName = name;
    }

    save(){
        let newUser = { 
            "name" : this.userName
        }
        users.push(newUser);
        console.log(...users)
    }


    static getAll(){
        return users;
    }
}



module.exports = User; 
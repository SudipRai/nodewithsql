const mysql = require("mysql")


// Create connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'my_db'
});

//Connect
    db.connect((err)=>{
        if(err){
            console.log(err);
        }
        console.log("Sql connected")
    })


module.exports=db

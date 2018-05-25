const express = require('express');
const mysql = require('mysql');
let server = express();
let db = mysql.createConnection({
    host: 'localhost', user: 'root', password: '123456',
    database: 'test'
})


// db.query("INSERT INTO `userinfo`(`username`, `password`) VALUES ('apple2','green2')",(err,data)=>{
//     if(err){
//         console.log(err,'err');
//     }else{
//         console.log(data,'success');
//     }
// })



















server.listen(3000);
















const express = require('express');
const mysql = require('mysql');
let server = express();
let db = mysql.createConnection({
    host: 'localhost', user: 'root', password: '123456',
    database: 'test'
})
//banner:ID title(32) sub_title(16) src(64)
//article:ID author(16) author_src(64) title(32) post_time (int()) content(text()) n_like(int) 
//user:ID username(32) password(32) src(64)





































server.listen(3000);


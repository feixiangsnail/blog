const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const mysql = require('mysql');
const expressRoute = require('express-route');
const multer = require('multer')
const multerObj = multer({ dest: './static/upload' })
const server = express();
//获取请求数据 get post
server.use(multerObj.any())
//cookie session
server.use(cookieParser());
(function () {
    let keys = [];
    for (let i = 0; i < 1000; i++) {
        keys[i] = 'a_' + Math.random();
    }
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20 * 60 * 1000//20min
    }))
})();
//模板
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('view engine', 'html');
//route



server.use('/article', require('./route/1.js'));
server.use('/blog', require('./route/2.js'));
//default:static
server.use(express.static('./static'));
server.listen(3000);

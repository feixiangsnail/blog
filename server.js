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
let r1 = express.Router();
let r2 = express.Router();
server.use('/article/', r1);
r1.get('/1.html', (req, res) => {
    console.log(111)
    res.send('I am artile1').end();
})
r1.get('/2.html', (req, res) => {
    res.send('I am artile2').end();
})
server.use('/blog', r2);
r2.get('/a.html', (req, res) => {
    res.send('I am blog1').end();
})
r2.get('/b.html', (req, res) => {
    res.send('I am blog2').end();
})
//default:static
server.use(express.static('./static'));
server.listen(3000);

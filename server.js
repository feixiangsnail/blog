let express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const mysql = require('mysql');
let server = express();
server.listen(3000);
//中间件
server.use(cookieParser('kjlkj'))
server.use(cookieSession({ name: 'session_id', keys: ['a', 'b'] }))
server.use(bodyParser());
server.use(express.static('www'));
//配置模板引擎三步骤,输出什么东西,目标文件夹，编译方式
server.set('view engine', 'html');
server.set('views', './views');
server.engine('html', consolidate.ejs);
//连接池
const db = mysql.createPool({
    host: 'localhost', user: 'root', password: '123456',
    database: 'blog'
})
//接受用户请求 
server.get('/', (req, res, next) => {
    //查询banner的东西
    db.query('SELECT * FROM banner_table', (err, data) => {
        if (err) {
            console.log(err, 'err');
            res.status(400).send('database error').end();
        } else {

            res.banners = data;
            next();


        }

    });


})
server.get('/', (req, res, next) => {
    console.log(res.banners, 'bannersres')
    //查询banner的东西
    db.query('SELECT ID, title,summary FROM article_table', (err, data) => {
        if (err) {
            console.log(err, 'err');
            res.status(400).send('database error').end();
        } else {
            console.log(data, 'data');
            res.news = data;
            next();
        }

    });


})


server.get('/', (req, res) => {
    console.log(res, 'res')
    res.render('index.ejs', {
        banners: res.banners, news: res.news
    });
})

server.get('/article', (req, res) => {
    console.log(req.query.id);
    if (req.query.id) {
        if (req.query.act == 'like') {

            db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`, (err, data) => {
                if (err) {
                    console.log(err, '点赞失败');
                } else {
                    console.log(data, 'data');
                }

            })





        }
        db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) => {
            if (err) {
                res.status(404).send('数据库有问题您请求的文章没找到').end();
            } else {

                if (data.length == 0) {
                    res.status(404).send('您请求的文章没找到').end();
                } else {
                    let article_data = data[0];
                    let oDate = new Date();

                    res.render('conText.ejs', { article_data: article_data });
                }
            }
        })
    } else {
        res.status(404).send('您请求的文章没找到').end();
    }

})







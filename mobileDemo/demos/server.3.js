let express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
let server = express();
server.listen(3000);
//中间件
server.use(cookieParser('kjlkj'))
server.use(cookieSession({ name:'session_id', keys: ['a','b']}))
server.use(bodyParser());
server.use(express.static('www'));
//配置模板引擎三步骤,输出什么东西,目标文件夹，编译方式
server.set('view engine', 'html');
server.set('views', './views');
server.engine('html', consolidate.ejs);

//路径
server.get('/', (req, res) => {
    res.send('good afternoon')
})
server.get('/index', (req, res) => {
    res.render('1.ejs', { name: 'blue' });
    // if (req.session.userid) {
    //     res.render('1.ejs', { name: 'blue' });
    // } else {
    //     res.render('login.ejs', {});
    // }

})












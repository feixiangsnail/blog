const express = require('express');
module.exports = (function () {
    let router = express.Router();
    router.get('/1.html', (req, res) => {
       
      //  res.send('I am artile1236598').end();
      res.render('./1.ejs',{title:'我是标题',a:12,b:5})
    })
    router.get('/2.html', (req, res) => {
        res.send('I am artile233').end();
    })
    return router;
})()

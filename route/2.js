const express = require('express');
module.exports = (function () {
    let router = express.Router();
    router.get('/a.html', (req, res) => {
        res.send('I am blog1aaa').end();
    })
    router.get('/b.html', (req, res) => {
        res.send('I am blog2').end();
    })
    return router;
})();

const express = require('express');
let server = express();
let routeUser = express.Router();
routeUser.get('/1.html',(req,res)=>{
    res.send('user1');
})
routeUser.get('/2.html',(req,res)=>{
    res.send('user2');
})
server.use('/user',routeUser);


















server.listen(3001);

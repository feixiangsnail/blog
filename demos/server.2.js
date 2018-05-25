let express = require('express');
const bodyParser = require('body-parser');
let server = express();
server.use(bodyParser())
server.listen(3000);
server.post('/api/getUser', (req, res) => {
    
    res.send(JSON.stringify(req.body));
})

server.use(bodyParser())

server.use('/', (req, res, next) => {
    console.log(req.body);
    res.send('hireq');
})
















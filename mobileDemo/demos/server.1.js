const express = require('express');
const app = express();
const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

connection.connect((err) => {
    if (err) {
        console.log('err');
    } else {
        console.log("connected")
    }
})

app.get('/api/select', (req, res) => {
    connection.query('SELECT * FROM test', (err, rows, fields) => {
        if (err) {
            res.send('err in the query');
        } else {
            res.send('successful')
        }
    })
})










app.listen(3000);





















// app.use(express.json());
// let courses = [
//     { id: 1, name: 'course1' },
//     { id: 2, name: 'course2' },
//     { id: 3, name: 'course3' },
// ]
// app.get('/', (req, res) => {
//     res.send('Helloworld')
// });
// app.get('/api/courses', (req, res) => {
//     res.send({ a: 'a', b: 'b' })
// })

// app.post('/api/courses', (req, res) => {

//     if (!req.body.name || req.body.name.length < 3) {
//         res.status(400).send('name is required')
//     }
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course);
//     console.log(courses);
//     res.send(course);
// })

// app.get('/api/courses/:id', (req, res) => {
//     let course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) res.status(404).send('the course with the given id was unvalid')
//     res.send(course);

// })

// const port = process.env.PORT || 3000;
// app.listen(3000, () => {
//     console.log(`listening at port ${port}`)
// })
















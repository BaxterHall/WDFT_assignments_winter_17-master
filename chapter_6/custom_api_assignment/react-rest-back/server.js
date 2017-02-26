const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')

let tasks = {
    todos: [{ text: 'learn angular', done: false, id: 1 },
    { text: 'write the content for the next module', done: false, id: 2 },
    { text: 'buy cheese', done: true, id: 3 },
    { text: 'buy milk', done: true, id: 4 }]
};
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});

app.get('/home', (req, res) => {
    //  console.log(req.body);
    fs.readFile('todos.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log('OK: ' + 'todos.txt');
        tasks = JSON.parse(data)
        res.json(tasks)




    });
});
app.post('/addtodos', (req, res) => {
    console.log(req.body)
    tasks.todos = req.body.newState

    task = JSON.stringify(req.body.newState)

    fs.writeFile('todos.txt', task, 'utf8', (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});



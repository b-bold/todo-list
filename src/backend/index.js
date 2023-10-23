const express = require("express")
const app = express()
const port = 3000

const todos = [
    {
        id: 1,
        desc: 'write python code',
        completed: true
    },
    {
        id: 2,
        desc: 'write javascript code',
        completed: true
    },
];

app.get('/', (req, res, next) => {
    res.send('<h1>ToDo List HomePage<h1>')
})

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.listen(port, () => {
    console.log('app is listening in Port:', port);
})
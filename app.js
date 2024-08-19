const express = require('express');
const path = require('path');
const app = express();
const router = express.Router()
const port = 3000;

app.use(express.json());

const messages = [];

app.get('/', (req, res) => {

    if (res.url == '/') {
        res.send('nice')
    } else {
        res.sendStatus(404).send('NOT FOUND')
    }
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})

app.post('/messages', (req, res) => {

    messages.push(req.body);

    console.log(messages)

    res.status(201).send({ "message": "recived" })

})

app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/Index.html'))
})


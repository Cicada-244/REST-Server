const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const router = express.Router()
const port = 3000;

app.use(express.json());

const messages = [];

console.log(process.env.TOKEN_SECRET)


app.listen(port, () => {

    console.clear()
    console.log(`server listening on port: ${port}`)

})


app.use('/api/messages', require('./Routes/POST/ChatMessages'))

app.use('/api/login', require('./JWT/Authentication'))


app.get('/LogIn', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/login.html'))
})

app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/Index.html'))
})


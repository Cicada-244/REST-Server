const express = require('express');
const path = require('path');

const app = express();
const router = express.Router()
const port = 3000;

app.use(express.json());

const messages = [];



app.listen(port, () => {

    console.clear()
    console.log(`server listening on port: ${port}`)
})


app.use('/api', require('./Routes/POST/ChatMessages'))




app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname, './Views/Index.html'))
})


const express = require('express');
const router = express.Router();
const path = require('path');
const app = express()



app.use(express.json());

const messages = [];

router.post('/messages', (req, res) => {

    messages.push(req.body);

    console.clear()
    console.log(messages)



    res.status(201).send({ "message": "recived" })

})

module.exports = router;
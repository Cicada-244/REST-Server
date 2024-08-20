const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
const path = require('path');
const app = express()



app.use(express.json());

const messages = [];

//Add Message sent from client to messages array 
router.post('/send', (req, res) => {

    messages.push(req.body);

    console.clear()
    console.log(messages)

    res.status(201).send(JSON.stringify(messages))

})


router.get('/send', (req, res) => {
    res.status(201).send(json.parse(messages))
})

module.exports = router;
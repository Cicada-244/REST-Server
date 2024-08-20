const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './../../.env' });
const router = express.Router();

function generateAccessToken(userName) {
    return jwt.sign({ userName }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
}

router.post('/authorise', (req, res) => {

    console.log(req.body.userName)

    const token = generateAccessToken(req.body.userName)

    res.status(200).json(token)

})

module.exports = router;
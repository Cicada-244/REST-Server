const express = require('express');
const app = express();
const port = 3000;

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
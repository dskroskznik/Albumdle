const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // port 3000

app.get('/', (req, res) => {
    res.send('yo!');
});

app.listen(port, () => {
    console.log('Running server on port: ${port}');
});
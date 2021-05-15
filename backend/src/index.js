const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    res.send('Tudo certo na API');
});

server.listen(3000, () => {
    console.log('API ONLINE');
});
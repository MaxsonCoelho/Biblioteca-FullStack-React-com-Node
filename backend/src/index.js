const express = require('express');
const server = express();
server.use(express.json());

const AuthorRoutes = require('./routes/AuthRoutes');

server.use('/author', AuthorRoutes);

server.listen(3000, () => {
    console.log('API ONLINE');
});
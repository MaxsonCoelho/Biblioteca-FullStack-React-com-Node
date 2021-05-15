const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());

const AuthorRoutes = require('./routes/AuthRoutes');
const BooksRoutes = require('./routes/BooksRoutes');

server.use('/author', AuthorRoutes);
server.use('/books', BooksRoutes);

server.listen(8080, () => {
    console.log('API ONLINE');
});
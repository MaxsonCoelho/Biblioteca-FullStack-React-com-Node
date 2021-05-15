const express = require('express');
const router = express.Router();

const BooksController = require('../controller/BooksController');
const BooksValidation = require('../middlewares/BooksValidation');

router.post('/', BooksValidation, BooksController.create);
router.put('/:id', BooksValidation, BooksController.update);
router.get('/filter/all', BooksController.all);
router.get('/:id', BooksController.show);
router.delete('/:id', BooksController.delete);


module.exports = router;
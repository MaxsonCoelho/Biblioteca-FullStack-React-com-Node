const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');
const AuthorValidation = require('../middlewares/AuthorValidation');

router.get('/filter/all', AuthorController.all);
router.get('/search', AuthorController.search);
router.get('/:id', AuthorController.show);
router.post('/', AuthorValidation, AuthorController.create);
router.put('/:id', AuthorValidation, AuthorController.update);
router.delete('/:id', AuthorController.delete);



module.exports = router;
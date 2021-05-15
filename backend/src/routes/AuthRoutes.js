const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');
const AuthorValidation = require('../middlewares/AuthorValidation');

router.post('/', AuthorValidation, AuthorController.create);
router.put('/:id', AuthorValidation, AuthorController.update);
router.get('/filter/all', AuthorController.all);
router.get('/:id', AuthorController.show);
router.delete('/:id', AuthorController.delete);


module.exports = router;
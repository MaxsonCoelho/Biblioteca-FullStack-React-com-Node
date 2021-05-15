const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');
const AuthorValidation = require('../middlewares/AuthorValidation');

router.post('/', AuthorValidation, AuthorController.create)
router.put('/:id', AuthorController.update)

module.exports = router;
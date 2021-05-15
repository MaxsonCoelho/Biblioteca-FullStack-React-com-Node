const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');
const AuthorValidation = require('../middlewares/AuthorValidation');

router.post('/', AuthorValidation, AuthorController.create)


module.exports = router;
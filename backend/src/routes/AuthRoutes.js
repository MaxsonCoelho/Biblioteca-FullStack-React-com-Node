const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');

router.post('/', AuthorController.create)


module.exports = router;
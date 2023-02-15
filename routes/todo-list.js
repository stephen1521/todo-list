const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const listController = require('../controllers/todoController');

router.get('/all', listController.getAll);

module.exports = router;
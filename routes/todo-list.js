const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const listController = require('../controllers/todoController');

router.get('/all', listController.getAll);
router.get('/get-one-by-id/:id', listController.getById);
router.post('/create-one', listController.createOne);
router.put('/update-one/:id', listController.updateOne);
router.delete('/delete-one/:id', listController.deleteOne);
router.post('/create-multi', listController.createMulti);
router.delete('/delete-multi/:condition', listController.deleteMulti);

module.exports = router;
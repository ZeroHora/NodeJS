'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');

router.get('/api/users', controller.get);
router.get('/api/users/:id', controller.getById);
router.post('/api/users', controller.post);
router.put('/api/users/:id', controller.put);
router.delete('/api/users/:id', controller.delete);

module.exports = router;
const express = require('express');
const { createUser, getUser } = require('../controllers/user');

const router = express.Router();

// POST /login
router.post('/signup', createUser);
router.post('/login', getUser);

module.exports = router;
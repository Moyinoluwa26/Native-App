const express = require('express');
const verifyToken = require('../middlewares/user');
const router = express.Router();

router.get('/user_data', verifyToken, (req, res) => {
    res.status(200).send(`You're in the user data page of user ${req.user.username}`);
});
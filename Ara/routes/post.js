const express = require('express');
const postController = require('../controllers/post');
const verifyToken = require('../middlewares/user');

const router = express.Router();

// Import the post controller

// Define your routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', verifyToken, postController.createPost);
router.put('/:id', postController.updatePostById);
router.delete('/:id', postController.deletePostById);
router.get('/user/:id', postController.getUserPosts)

module.exports = router;
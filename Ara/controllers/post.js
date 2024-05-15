const Post = require('../models/post');
const User = require('../models/user');

// Import the necessary modules and models

// Controller to create a new post
const createPost = async (req, res) => {
    try {
        // Get the post data from the request body
        const { title, content } = req.body;
        const { user } = req;

        // Create a new post object
        const newPost = new Post({
            title,
            content,
            // You can also associate the post with the user who created it
            user: user._id
        });

        // Save the post to the database
        const savedPost = await newPost.save();
        // Push the post ID to the user's postIds array
        const update = await User.findByIdAndUpdate(user._id, { $push: { posts: savedPost._id } });
        if (!update) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(201).json(savedPost);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all posts
const getAllPosts = async (req, res) => {
    try {
        // Fetch all posts from the database
        const posts = await Post.find();

        // Return the posts as the response
        res.json(posts);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

// Controller to get all posts by a specific user
const getUserPosts = async (req, res) => {
    try {
        // Get the user ID from the request parameters
        const userId = req.params.id;

        // Find the user in the database by their ID
        const user = await User.findOne({ _id: userId });

        // If the user is not found, return a 404 error
        if (!user) {
            return res.status(404).json({ error: error.message });
        }

        // Find all posts associated with the user
        const posts = await Post.find({ user: userId });
        if (!posts) {
            return res.status(404).json({ error: error.message });
        }
        // Return the posts as the response
        res.json(posts);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: 'Failed to fetch user posts' });
    }
};

// Controller to get a specific post by ID
const getPostById = async (req, res) => {
    try {
        // Get the post ID from the request parameters
        const postId = req.params.id;

        // Find the post in the database by its ID
        const post = await Post.findById(postId);

        // If the post is not found, return a 404 error
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Return the post as the response
        res.json(post);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: 'Failed to fetch post' });
    }
};

// Controller to update a specific post by ID
const updatePostById = async (req, res) => {
    try {
        // Get the post ID from the request parameters
        const postId = req.params.id;
        const { title, content } = req.body;

        // Find the post in the database by its ID
        const post = await Post.findOne({ _id: postId });

        // If the post is not found, return a 404 error
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Update the post data with the new values
        post.title = title;
        post.content = content;

        // Save the updated post to the database
        const updatedPost = await post.save();

        // Return the updated post as the response
        res.json(updatedPost);
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a specific post by ID
const deletePostById = async (req, res) => {
    try {
        // Get the post ID from the request parameters
        const postId = req.params.id;

        // Find the post in the database by its ID
        const post = await Post.findOne({ _id: postId });

        // If the post is not found, return a 404 error
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Delete the post from the database
        await post.deleteOne();

        // Return a success message as the response
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ error: 'Failed to delete post' });
    }
};

// Export the controllers
module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    getUserPosts
};
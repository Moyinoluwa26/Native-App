// Import any necessary modules or dependencies
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// Define your controller functions
const getUser = async (req, res) => {
    // Logic to get a user
    try {
        const { username, password } = req.body;

        // Check if username and password are provided
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Create a token
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '12h' });
        user.token = token;
        user.save();
        return res.status(200).json({ user });

    } catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
};

const createUser = async (req, res) => {
    // Logic to create a user  
    try {
        const { Firstname, Lastname, email, username, password } = req.body;

        // Check if username and password are provided
        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ error: 'Username already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
            Firstname,
            Lastname,
            email
        });

        // Save the new user to the database
        await newUser.save();

        // Return success response
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Return the actual error message
        return res.status(500).json({ error: error.message });
    }
};


const updateUser = (req, res) => {
    // Logic to update a user
};

const deleteUser = (req, res) => {
    // Logic to delete a user
};

// Export your controller functions
module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
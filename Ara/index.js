require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const URL = process.env.MONGO_URL;
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./routes/user');
const postRoute = require('./routes/post');


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRoute);
app.use('/post', postRoute);


mongoose.connect(URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
        /*User.insertMany(users);
        Post.insertMany(posts);*/
    })
}).catch((err) => {
    return console.log(`${err} did not connect`)
})



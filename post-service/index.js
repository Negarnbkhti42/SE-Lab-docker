const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

const PORT = process.env.PORT || 3002;

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const dbPort = process.env.DB_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@mongo:${dbPort}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('this is the post service');
});

app.post('/publish', (req, res) => {
    const { userId, title, content } = req.body;
    const newPost = new Post({ writer: userId, title, content });
    newPost.save()
        .then(() => {
            res.send(newPost.toObject());
        })
        .catch(() => {
            res.status(400);
            res.send("could not publish post")
        })
});

app.get('/posts', (req, res) => {
    Post.find()
        .then((posts) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(posts));
        })
})

app.get('/post/:postId', (req, res) => {
    Post.findOne({ _id: req.params.postId })
        .then((post) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(post));
        })
        .catch(() => {
            res.status(400)
                .send("Couldn't find post");
        })
})


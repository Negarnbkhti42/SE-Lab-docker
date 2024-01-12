const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const PORT = process.env.PORT || 3001;

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
    res.send('this is the user serivce');
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    newUser.save()
        .then(() => {
            res.send(newUser.toObject()._id);
        }).catch(() => {
            res.status(400);
            res.send("failed to create user");
        })
})

app.post('/login', (req, res) => {
    console.log("request:", req);
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then((user) => {
            res.send(user._id)
        })
        .catch(() => {
            res.status(400)
            res.send("user does not exist")
        })
})

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const PORT = process.env.PORT || 3001;

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const dbPort = process.env.DB_PORT;

const app = express();

mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@mongo:${dbPort}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('this is the user serivce');
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    newUser.save()
        .then(() => {
            res.send(newUser.toObject());
        }).catch(() => {
            res.status(400);
            res.send("failed to create user");
        })
})

app.get('/login', async (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(() => {
            res.send("logged in successfully")
        })
        .catch(() => {
            res.status(400)
            res.send("user does not exist")
        })
})

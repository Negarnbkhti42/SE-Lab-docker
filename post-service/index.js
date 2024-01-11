const express = require('express');
// impbodyParser from 'body-parser';

const PORT = process.env.PORT || 3002;

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const dbPort = process.env.DB_PORT;

const app = express();


app.get('/', (req, res) => {
    res.send('this is the post service');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
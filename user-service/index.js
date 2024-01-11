import express from 'express';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3001;

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD
const dbPort = process.env.DB_PORT;

const app = express();

await mongoose.connect(`mongodb://${dbUsername}:${dbPassword}@mongo:${dbPort}`);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
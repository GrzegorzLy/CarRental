import express from 'express';
import config from './config';

const { port } = config;

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

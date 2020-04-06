import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import config from './config';
import { init } from './coords';

const { port } = config;

const app = express();
const io = socketIo(http);

app.get('/', (req, res) => res.send('Hello World!'));
init();

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

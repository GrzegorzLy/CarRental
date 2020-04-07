import express from 'express';
import socketIo from 'socket.io';
import http from 'http';
import cors from 'cors';
import config from './config';
import { init } from './coords';

const { port, socketPort, webUrl } = config;

const app = express();
app.use(
  cors({
    origin: webUrl,
    credentials: true,
  }),
);
const io = socketIo(http);
init(io);
io.listen(socketPort);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

import socketIo from 'socket.io';
import http from 'http';
import util from 'util';
import CarPosition from './CarPosition';

const io = socketIo(http);
const setTimeoutPromise = util.promisify(setTimeout);

const coords: Array<CarPosition> = [
  new CarPosition(1, 54.37598, 18.60835, 'polonez'),
  new CarPosition(2, 54.37598, 18.60835, 'maluch'),
  new CarPosition(3, 54.37598, 18.60835, 'uno'),
];

export function init() {
  io.on('connection', (socket) => {
    console.log('connection opened');

    setTimeoutPromise(300).then((c) => {
      io.emit('coords', coords);
    });
  });
}

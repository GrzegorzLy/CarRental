import CarPosition from './CarPosition';

const coords: Array<CarPosition> = [
  new CarPosition(1, 54.37598, 18.60835, 'polonez'),
  new CarPosition(2, 54.37598, 18.60835, 'maluch'),
  new CarPosition(3, 54.37598, 18.60835, 'uno'),
];

export function init(io: SocketIO.Server) {
  io.on('connection', (client) => {
    console.log('connection opened');

    setInterval(() => client.emit('coords', coords), 1000);
  });
}

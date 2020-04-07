import CarPosition from './CarPosition';
const COORDS_AMOUNT = 20;

let coords: Array<CarPosition> = [];
const clients: Array<string> = [];

function createFakeCoords(lat = 54.37598, lng = 18.60835, amount = 10) {
  if (coords.length) {
    return;
  }
  coords = [
    new CarPosition(1, lat, lng, 'polonoze caro'),
    new CarPosition(2, lat, lng, 'maluch plus'),
    new CarPosition(3, lat, lng, 'fiat uno'),
    new CarPosition(4, lat, lng, 'passat 5'),
    new CarPosition(5, lat, lng, 'maluch plus'),
    new CarPosition(6, lat, lng, 'fiat multipla'),
    new CarPosition(7, lat, lng, 'audi v8'),
    new CarPosition(8, lat, lng, 'kia joice'),
    new CarPosition(9, lat, lng, 'mercedes vaneo'),
    new CarPosition(10, lat, lng, 'polonez'),
  ];
}

export function init(io: SocketIO.Server) {
  io.on('connection', (client) => {
    console.log('connection opened');
    if (clients.includes(client.id)) {
      return;
    } else {
      clients.push(client.id);
    }

    client.once('coordsFilter', ([lat, lng]) => {
      createFakeCoords(lat, lng, COORDS_AMOUNT);
      setInterval(() => {
        coords.forEach((c) => c.move());
        io.sockets.emit('coords', coords);
      }, 500);
    });
  });
}

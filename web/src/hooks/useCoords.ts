import { useState, useEffect } from 'react';
import { CarPosition } from '../types/CarPosition';

const useCoords = (socket: SocketIOClient.Socket): Array<CarPosition> => {
    const [coords, setCoords] = useState<Array<CarPosition>>([]);

    useEffect(() => {
        socket.on('coords', (coords: Array<CarPosition>) => {
            setCoords(coords);
        });
        return (): void => {
            socket.disconnect();
        };
    }, [socket]);
    return coords;
};

export default useCoords;

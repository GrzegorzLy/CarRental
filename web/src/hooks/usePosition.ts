import { useState, useEffect } from 'react';
import { LatLngTuple } from 'leaflet';

const defaultPosition: LatLngTuple = [54.37598, 18.6083];

const useMapPosition = (socket: SocketIOClient.Socket): LatLngTuple => {
    const [mapPosition, setMapPosition] = useState<LatLngTuple>(defaultPosition);
    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            return;
        }
        const watcher = geo.watchPosition(
            (position) => {
                if (mapPosition[0] !== position.coords.latitude || mapPosition[1] !== position.coords.latitude) {
                    const coords = [position.coords.latitude, position.coords.longitude];
                    setMapPosition(coords as LatLngTuple);
                    socket.emit('coordsFilter', coords);
                }
            },
            () => socket.emit('coordsFilter', defaultPosition),
            {
                maximumAge: 10000,
                enableHighAccuracy: false,
                timeout: 15000,
            },
        );
        return (): void => geo.clearWatch(watcher);
    }, [socket]);

    return mapPosition;
};

export default useMapPosition;

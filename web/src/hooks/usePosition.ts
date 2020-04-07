import { useState, useEffect } from 'react';
import { LatLngTuple } from 'leaflet';

const defaultPosition: LatLngTuple = [54.37598, 18.6083];

const useMapPosition = (): LatLngTuple => {
    const [mapPosition, setMapPosition] = useState<LatLngTuple>(defaultPosition);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setMapPosition([position.coords.latitude, position.coords.longitude]);
            },
            (err) => console.log(err),
            { enableHighAccuracy: true },
        );
    });

    return mapPosition;
};

export default useMapPosition;

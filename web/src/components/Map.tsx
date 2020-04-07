import React from 'react';
import styled from 'styled-components';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { CarPosition } from '../types/CarPosition';

interface Props {
    coords: Array<CarPosition>;
    mapPosition: LatLngTuple;
}

const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    #mapId {
        height: 100%;
        width: 100%;
    }
`;

const Map: React.SFC<Props> = ({ coords, mapPosition }) => {
    return (
        <Wrapper>
            <LeafletMap id="mapId" center={mapPosition} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
                {coords.map((c) => (
                    <Marker position={[c.lat, c.lng]} key={c.id}>
                        <Popup>{c.brand}</Popup>
                    </Marker>
                ))}
            </LeafletMap>
        </Wrapper>
    );
};

export default Map;

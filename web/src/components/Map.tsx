import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    #mapId {
        height: 100%;
        width: 100%;
    }
`;

const Map: React.FC = (): ReactElement => {
    const position: LatLngTuple = [54.37598, 18.60835];
    return (
        <Wrapper>
            <LeafletMap id="mapId" center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </LeafletMap>
        </Wrapper>
    );
};

export default Map;

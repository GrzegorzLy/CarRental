import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import useMapPosition from '../hooks/usePosition';

const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    #mapId {
        height: 100%;
        width: 100%;
    }
`;

const Map: React.FC = (): ReactElement => {
    const mapPosition = useMapPosition();

    const pos1: LatLngTuple = [54.38598, 18.61835];
    const pos2: LatLngTuple = [54.36598, 18.64835];

    return (
        <Wrapper>
            <LeafletMap id="mapId" center={mapPosition} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                ></TileLayer>
                <Marker position={pos2}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={pos1}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </LeafletMap>
        </Wrapper>
    );
};

export default Map;

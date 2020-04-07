import React, { ReactElement, useState } from 'react';

import Map from './components/Map';
import List from './components/List';
import Container from './components/Container';
import useMapPosition from './hooks/usePosition';
import useCoords from './hooks/useCoords';

interface Props {
    socket: SocketIOClient.Socket;
}

const App: React.SFC<Props> = ({ socket }): ReactElement => {
    const [filter, setFilter] = useState('');
    const mapPosition = useMapPosition(socket);
    const coords = useCoords(socket);
    const filteredCoords = coords.filter((c) => (filter ? c.brand.includes(filter) : true));
    const onFilterChange = (value: string): void => setFilter(value);

    return (
        <Container>
            <Map coords={filteredCoords} mapPosition={mapPosition} />
            <List coords={filteredCoords} onFilter={onFilterChange} />
        </Container>
    );
};

export default App;

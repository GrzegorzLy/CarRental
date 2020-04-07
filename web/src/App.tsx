import React, { ReactElement } from 'react';
import openSocket from 'socket.io-client';

import Map from './components/Map';
import List from './components/List';
import Container from './components/Container';
import config from './config';

const App: React.FC = (): ReactElement => {
    const socket = openSocket(config.socketUrl);
    socket.on('coords', console.log);
    return (
        <Container>
            <Map />
            <List />
        </Container>
    );
};

export default App;

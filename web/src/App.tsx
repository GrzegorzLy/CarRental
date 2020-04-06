import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Map from './components/Map';
import List from './components/List';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

const App: React.FC = (): ReactElement => {
    return (
        <Wrapper>
            <Map />
            <List />
        </Wrapper>
    );
};

export default App;

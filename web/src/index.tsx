import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import openSocket from 'socket.io-client';

import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';
import config from './config';

const socket = openSocket(config.socketUrl);

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App socket={socket} />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

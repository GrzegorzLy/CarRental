const config = {
  port: process.env.PORT || 3002,
  socketPort: process.env.SOCKET_PORT || 8000,
  webUrl: process.env.WEB_URL || 'http://localhost:3000',
};

export default config;

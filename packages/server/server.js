const http = require('http');
const app = require('./app');
// require('./models');
const PORT = process.env.PORT ?? 5000;

console.log(`process.env.PORT`, process.env.PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is runnung on http://localhost:${PORT}`);
});

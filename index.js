const express =  require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = process.env.port ||  3000;

const app = express();

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
});
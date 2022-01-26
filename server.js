// Include dependecies
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3000;
const server = express();

server.listen(port, () => {
    console.log('Server running at port: ', port);
});
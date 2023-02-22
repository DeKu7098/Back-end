// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware')
    next();
});

app.use((req, res, next) => {
    console.log('in other middleware')
    res.send('<h1>Hello From Express!!</h1>')
});

// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000)
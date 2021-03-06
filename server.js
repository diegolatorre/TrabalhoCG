const app = require('express')();
const http = require('http').createServer(app);
const express = require('express');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/teste', (req, res) => {
    res.sendFile(__dirname + '/views/how.html');
});

http.listen(port, () => {
    console.log(`starting server at: ${port}`);
});
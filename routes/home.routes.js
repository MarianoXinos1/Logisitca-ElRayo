const express = require('express');
const routes = express.Router();
const path = require('path');


routes.get('/', (req,res) => {
    const homePath = path.join(__dirname, '../src/views/home.html');
    res.sendFile(homePath);

});

module.exports = routes

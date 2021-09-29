const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const actionRoutes = require('./routes/actions');


const app = express();

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Forwarded-For, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
});
app.use(bodyParser.json());

app.use('/api/action', actionRoutes);

module.exports = app;
// src/frameworksAndDrivers/web/server.js
const express = require('express');
const routes  = require('./routes');

const app = express();
app.use(express.json());

// health-check
app.get('/', (req, res) => res.send('✅ Auth-Service running'));

routes(app);

module.exports = app;

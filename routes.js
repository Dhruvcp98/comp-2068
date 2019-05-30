const express = require('express');
const app = express();

//Import our page routes

const pageRoutes = require('./routes/pages');

//Register our page routes with our app
app.use('/', pageRoutes);

//Export our changes
module.exports = app;
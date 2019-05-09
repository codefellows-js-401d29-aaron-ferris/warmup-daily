'use strict';

const express = require('express');
const app = express();
require('dotenv');

// Set the view engine for templating
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// Statics
app.use( express.static(`${__dirname}/../public`) );

/// App Level MW
app.use(express.json());

app.get( '/', (request, response) => {
  res.send( '<p> Hello world </p>' );
});

app.post( '/save', (request, response ) => {
  res.json(request.body);
});

app.get('/err', (request, response, next) => {
  next('You seem to hit a malfunction human');
});

app.get('*', (request, response) => {
  response.status(404);
  response.statusMessage = 'Silly human, trying to reach for things that do not exist';
  response.render('Nothing for humans to see here', {request:request});
});

app.use( (error ,response ,response ,next ) => {
  response.status(500);
  response.statusMessage = 'Server Error';
  response.render('Error Will Robinson, error', {request: request, error: error});
});

module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};

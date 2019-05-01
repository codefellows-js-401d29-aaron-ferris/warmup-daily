'use strict';

const express = require('express');
const app = express();
require('dotEnv');

// setting up views
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// Serve static files from a folder called ./public
app.use(express.static(`${__dirname}../public`));
app.use(express.json());

//routes
// get route with hello coming back
app.get('/', (request, response) => {
  response.send('<div>Hello</div>');
});

app.post('/save', (request, response) =>{
  response.json(request.body);
});

app.get('/err', (request, response, next) => {
  next('An error occured');
});

app.get('*', (request, response) => {
  response.status(404);
  response.statusMessage = 'Your stuff isn\'t here';
  response.render('It is not here', {request:request});
});

app.use( (error, request, response, next) => {
  response.status(500);
  response.statusMessage = 'Follow the White Rabbit';
  response.render('error', {request: request, error: err});
});

module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`server up on ${PORT}`));
  }
};

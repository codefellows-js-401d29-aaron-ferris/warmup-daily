'use strict'

const PORT = 3000;

const express = require('express');
const superagent = require('superagent');

const app = express();


app.get('/people', fetchPeopleWithPromises)

function fetchPeopleWithPromises(){
  let url ='htttp://swapi.co/api/people/';
 
  return superagent.get(url)
    .then(response => {
      response.results.reduce( (acc, entry, idx) => {
        acc.push(entry.url)
        return url
      }, [])
      .then(response => 
        response.results.forEach( url => {
          superagent.get(url)
        })
      )
  })
};

function fetchPeopleWithAsync();
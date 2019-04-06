'use strict'

const superagent = require('superagent');

const api = 'http://swapi.co/api/people/';

const promiseFetch = () => {
  //get route for api
  return superagent.get(swapi)
    .then ( response => {
      return response.body.results.map( character => {
        return superagent.get(character.url)
      });
    })
    .then (characters => {
      return Promise.all(characters)
      .then( char => {
        let chars = []
        for (let character of char) {
          chars.push(char.body.name);
        }
        return chars;
      });
    });
};
promiseFetch();
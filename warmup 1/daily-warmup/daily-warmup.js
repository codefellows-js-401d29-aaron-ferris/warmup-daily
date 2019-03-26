'use strict'
//constants to test
const test = [1,2,3,4,5,6,7,8,9,10]

//basic loops
const forLoop = function(array){
   for (let i = 0; i < array.length; i++){
     console.log(array[i])
  }
}

const whileLoop = function(array){
  i = 0;
  while(i<array.length){
    console.log(array[i])
    i++;
  }
}

const Map = function(array){
  let output = []
  for (let i = 0; i< array.length; i++){
    output[i] = array[i];
  }
  console.log(output);
}

const Filter = function(array,callback){
  let output =[];
  array.forEach( value => {
    if (callback(value)){
      output.push(value)
    }
  });
  console.log(output);
}
//cutting out reduce because we have 20 minutes for the warmpup0-01
const Reduce = function(arr, acc){
  let output
}

//constants given for written functions
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {
  people: people,
  stuff: stuff
};
//
let newPeople = ['Odie', ...people, 'Garfield' ];
let newStuff = {...stuff,
  cars:[...stuff.cars,'1998 Honda Civic LX']
};
let newState = {...state,
  people:['Odie', ...state.people, 'Garfiled'],
  stuff: {...state.stuff,
    cars: [...state.stuff.cars, '1998 Honda Civic LX']
  }
};
console.log('people', people, 'newPeople', newPeople);
console.log('stuff', stuff, 'newStuff', newStuff);
console.log('state', state , 'newState', newState);
//
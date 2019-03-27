'use strict'
const test = [1,2,3,4,5,6,7,8,9,10]

const FORLOOP = function(arr){
   for (let i = 0; i < arr.length; i++){
     console.log(arr[i])
  }
}
FORLOOP(test);
const WHILELOOP = function(arr){
  i = 0;
  while(i<arr.length){
    console.log(arr[i])
    i++;
  }
}
WHILELOOP(test);


const MAP = function(arr){
  let result = [];
  for (let i = 0; i< arr.length; i++){
    result[i] = arr[i];
  }
  console.log(result);
}
MAP(test);

const FILTER = function(arr,cb){
  let result =[];
  arr.forEach( val => {
    if (cb(val)){
      result.push(val)
    }
  });
  console.log(result);
}
FILTER(test, val%2);
//cutting out reduce because we have 20 minutes for the warmpup0-01
const Reduce = function(arr, cb, init){
  let acc = (init===undefined) ? undefined : init;
  for (let i = 0; i< arr.length; i++){
    acc = callback.call(arr[i],acc);
  }
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
let newPeople = ['Odie', ...people , 'Garfield' ];
let newStuff = {...stuff ,
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


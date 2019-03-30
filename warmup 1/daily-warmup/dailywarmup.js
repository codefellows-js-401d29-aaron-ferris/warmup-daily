'use strict'
// test array
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for loop 
const FORLOOP = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
};

FORLOOP(test);


// whileloop 
const WHILELOOP = function (arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i])
    i++;
  }
}

WHILELOOP(test);


// map function
const MAP = function (arr) {
  let output = []
  for (let i = 0; i < arr.length; i++) {
    output[i] = arr[i];
  };
  console.log(output);
}
MAP(test);


//filter function
const FILTER = function(arr, cb){
  let result = [];
  arr.forEach( (val) => {
    if (cb(val)){
      result.push(val);
    }
  })
  console.log(result);
}
let funct = (val => (val<5));

FILTER(test, funct)

const REDUCE = function (arr, cb, init){
  let acc = (init === undefined) ? arr[0]: init;
  for(let i = 0; i < arr.length; i++){
    acc = cb(acc, arr[i])
  }
  console.log(acc)
}

let fun =(valOne, valTwo)  => {
  return valOne+valTwo;
};

REDUCE(test, fun, 0);

//constants given for written functions
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = {
  people: people,
  stuff: stuff, 
  testarray: test
};


// add odie and garfield to people with spread operator
let newPeople = ['Odie', ... people, 'Garfield'];
console.log(newPeople);


//add another car to cars in newstuff with spread 

let newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Toyota Supra']
}
console.log(newStuff)

//add to people in state  and cars in state with spread

let newState = {
  ... state,
  stuff: {
    ...state.stuff,
    cars: [...state.stuff.cars, 'Ferarri']
  } ,
  people: ['Odie', ...state.people, 'Garfield', 'Jon'],
  
}

console.log(newState);




















'use strict'
// test array
let stooges = [ 'Larry', 'Curly', 'Moe', 'John']

// for loop 
const FORLOOP = function (arr) {
  for (let i = 0; i < arr.length; i++){
    console.log( test );
  }
  
};

FORLOOP(test);


// whileloop 
const WHILELOOP = function (arr) {
  counter = 0;
  while (counter < arr.length){
    console.log( test ),
    counter++
  }
}

WHILELOOP(test);


// map function
const MAP = function ( arr, cb ) {
  let newArr = [];
  arr.forEach(( val, idx ) =>{
    newArr.push(cb( val, idx ));
  });
  return newArr;
}

function FILTER( arr, cb ) {
  let newArr = [];
  arr.forEach(( val, idx ) =>{
    if ( cb( val, idx )) {
      newArr.push( val );
    };
  });
  return newArr;
}

function REDUCE(arr, cb, acc) {
  for (let i=0; i < arr.length; i++){
    acc = cb(acc, arr[i], i);
  }
  return acc;
}

FORLOOP(stooges);
whileLoop(stooges);
 

//shouting names
let peopleMod = MAP(stooges, (val,idx) =>{
  val.toUpperCase();
});
console.log(stoogesMod);

let stoogesFilter = FILTER(stooges, (val,idx) => {
  return val.match(/a/)
});
console.log(stoogesFilter);


let reducedstooges = REDUCE(stooges, (acc,val,idx) => {
   acc += val
   return acc
})

console.log(reducedstooges)
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




















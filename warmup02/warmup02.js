'use strict'

let people = [ 'Larry', 'Curly', 'Moe', 'John']

function forLoop(arr) {
  for (let i = 0; i< arr.lenth; i++){
    console.log(arr[i]);
  }
};

function whileLoop(arr){
  let counter = 0;
  while (counter < arr.length){
    console.log(arr[counter]);
    counter++;
  }
}

function map(arr, cb) {
  let newArr =[ ];
  arr.forEach((val, idx)=> {
    newArr.push(cb(val, idx))
  })
  return newArr;
}

function filter(arr, cb) {
  let newArr = [];
  list.forEach((val,idx) =>{
    if (cb(val,idx)){ newArr.push(val);}
  })
  return newArr;
}

function reduce(arr, cb, value) {
  for (let i=0; i<arr.length;i++){
    value = cb(value, arr[i],i);
  }
  return value;
}

forLoop(people);
whileLoop(people);
reduce 

//shouting names
let peopleMod = map(people, (val,idx) =>{
  val.toUpperCase();
});
console.log(peopleMod);

let peopleFilter = filter(people, (val,idx) => {
  return val.match(/a/)
});
console.log(peopleFilter);


let reducedPeople = reduce(people, (acc,val,idx) => {
   acc += val
   return acc
})

console.log(reducedPeople);

const characters = ['Kookla', 'Fran', 'Ollie']

let newCharacters = ['Odie', ...characters, 'Garfield'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

const newStuff = {...stuff, cars: [...stuff.cars, 'Ford']};

let state = {characters, stuff};
let newstate ={...state, characters:[...state.characters, 'Garfield']};

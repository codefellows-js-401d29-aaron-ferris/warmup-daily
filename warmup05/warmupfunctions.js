'use strict'
// test array
let test = [ 'Spinelli', 'Mikey', 'Gretchen', 'Vincent', 'TJ', 'Gus']

// for loop 
const forloop = function (arr) {
  for (let i = 0; i < arr.length; i++){
    console.log(test);
  }
  
};

forloop(test);


// whileloop 
const whileloop = function (arr) {
  counter = 0;
  while (counter < arr.length){
    console.log(test),
    counter++
  }
}

whileloop(test);


// map function
const mapfunction = function (arr, cb) {
  let newArr = [];
  arr.forEach((val, idx) =>{
    newArr.push(cb(val, idx));
  });
  return newArr;
}



function filterfunction(arr, cb) {
  let newArr = [];
  arr.forEach((val, idx) =>{
    if (cb(val, idx)) {
      newArr.push(val);
    };
  });
  return newArr;
}



function reducefunction(arr, cb, acc) {
  for (let i=0; i < arr.length; i++){
    acc = cb(acc, arr[i], i);
  }
  return acc;
}


 

//shouting names
let testMod = mapfunction(test, (val,idx) =>{
  val.toUpperCase();
});
console.log(testMod);

let testFilter = filterfunction(stooges, (val,idx) => {
  return val.match(/a/)
});
console.log(testFilter);


let reducedtest = reducefunction(stooges, (acc,val,idx) => {
   acc += val
   return acc
})

console.log(reducedtest)
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




















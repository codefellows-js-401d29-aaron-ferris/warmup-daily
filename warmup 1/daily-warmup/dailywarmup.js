'use strict'
//test array
const test = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]

///for
const FORLOOP = function(arr){
   for (let i = 0; i < arr.length; i++){
     console.log(arr[i])
  }
}
FORLOOP(test);

//while
const WHILELOOP = function(arr){
 let i = 0 ;
  while(i < arr.length){
    console.log(arr[i]);
    i++ ;
  }
}
WHILELOOP(test);

// map
const MAP = function(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
  }
  console.log(result);
}
MAP(test);

//filter
const FILTER = function(arr,cb) {
  let result =[];
  arr.forEach( val => {
    if (cb(val)){
      result.push(val)
    }
  });
  console.log(result);
}
const fun = function(val){
  return val%2;
}
FILTER(test, fun());

//
const REDUCE = function(arr, cb, init){
  let acc = (init===undefined) ? undefined : init;
  for (let i = 0; i< arr.length; i++){
    acc = callback.call(arr[i],acc);
  }
}
console.log(REDUCE);

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
// add with spread to array
let newPeople = ['Odie', ...people , 'Garfield' ];
//add to cars in newstuff with spread
let newStuff = {...stuff ,
  cars:[...stuff.cars,'1998 Honda Civic LX']
};

//add to people and cars in state with spread
let newState = {...state,
  people:['Odie', ...state.people, 'Garfiled'],
  stuff: {...state.stuff,
    cars: [...state.stuff.cars, '1998 Honda Civic LX']
  }
};
console.log('people', people, 'newPeople', newPeople);
console.log('stuff', stuff, 'newStuff', newStuff);
console.log('state', state , 'newState', newState);


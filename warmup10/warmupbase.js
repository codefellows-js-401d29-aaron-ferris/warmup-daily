'use strict'
// test array
let beatles = [ 'John Lennon', 'Paul McCartney', 'Ringo Starr', 'George Harrison']

// for loop 
const FORLOOP = function (arr) {
  for( let i = 0; i < arr.length; arr++ ) {
    console.log('forloop at', i, arr[i] ) ;
  }
};

FORLOOP( beatles );


// whileloop 
const WHILELOOP = function (arr) {
  let i = 0;
  while( i < arr.length ) {
    console.log( 'forloop at', i, arr[i] );
    i++
  }
}

WHILELOOP(beatles);



// map function
const MAP = function ( array, cb ) {
  let modArray = [];
  array.forEach(( value, index) => {
    modArray.push(  cb(value,index));
  });
  return modArray;
}

const money = ( val) =>{
  return `${val}, MONEY!`;
}
//money names
let money = MAP(beatles,money);
console.log('money map', money)

function FILTER( arr, cb ) {
  let newArr = [];
  arr.forEach(( val, idx ) =>{
    if ( cb( val, idx )) {
      newArr.push( val );
    };
  });
  return newArr;
}

let beatlesFilter = FILTER( beatles, ( val,idx ) => {
  return val.match(/a/)
});
console.log( 'beatles with a', beatlesFilter );

function REDUCE( arr, cb, acc = arr[i] ) {
  for (let i=0; i < arr.length; i++){
    acc = cb( acc, arr[i], i );
  }
  return acc;
}

const allbeatles = (acc, beatle) => {
   return `${acc} + ${beatle}`
 }
 
let reducedbeatles = REDUCE( beatles, allbeatles, 
'Beatles' ) 
console.log( 'reduce',reducedbeatles ) ;

 



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
};


// add odie and garfield to people with spread operator
let newPeople = ['Odie', ... people, 'Garfield'];
console.log(newPeople);


//add another car to cars in newstuff with spread 

let newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Toyota Supra']
}
console.log( newStuff )

//add to people in state  and cars in state with spread

let newState = {
  ... state,
  stuff: {
    ...state.stuff,
    cars: [...state.stuff.cars, 'Ferarri']
  } ,
  people: ['Odie', ...state.people, 'Garfield', 'Jon'],
  
}

console.log( newState );




















'use strict'

const SandQ = require('../../data-structures-and-algorithms/queueandstackweek/stackAndQueue/stacksAndQueues')
const Stack = SandQ.Stack;

let S = new Stack();

S.push('do')
S.push('ti')
S.push('la')
S.push('so')
S.push('fa')
S.push('mi')
S.push('re')
S.push('do')

function printAndEmpty( stuff ) {
  while( stuff.top !== null ) { 
    console.log( stuff.top.data);
    stuff.pop()
  }
}

printAndEmpty(S);
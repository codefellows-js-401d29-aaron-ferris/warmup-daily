'use strict'

const SandQ = require('../../data-structures-and-algorithms/queueandstackweek/stackAndQueue/stacksAndQueues')
const Q = SandQ.Queue;
const node = SandQ.Node;

let queue = new Q();
queue.enqueue('Do');
queue.enqueue('Re');
queue.enqueue('Mi');
queue.enqueue('Fa');
queue.enqueue('So');
queue.enqueue('La');
queue.enqueue('Ti');
queue.enqueue('Do');


function sing(stuff) {
  while( stuff.front !==null ) {
    console.log(stuff.front.data);
    stuff.dequeue();
  }
}

sing(queue);

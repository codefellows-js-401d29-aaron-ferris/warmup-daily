'use strict';
const queue  = require('./practice-queue')

class Node {
  constructor(value){
    this.val = value;
    this.LC = null;
    this.RC = null
  }
}

const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

const root = new Node(values[0]);
root.LC = new Node(values[1]);
root.RC = new Node(values[2]);
root.LC.LC = new Node(values[3]);
root.LC.RC = new Node(values[4]);
root.RC.LC = new Node(values[5]);
root.RC.RC = new Node(values[6]);


function preOrder(rootNode){
  let results = []

  const walk = node => {
    results.push(node.val);
    if (node.left) {return walk(node.left)}
    if (node.right) {return walk(node.right)}
  }

  walk(rootNode);

  return results;
}
console.log(preOrder(root))

function inOrder(rootNode){
  let results = [];

  const inO = node => {
    if (node.left) {return inO(node.left)}
    results.push(node.val);
    if (node.right) {return inO(node.right)}
  }
  inO(rootNode);

  return results;
}
console.log(inOrder(SpeechRecognitionError))

function postOrder(rootNOde){
  let results = []

  let post = node => {
    if (node.left) {return post(node.left)}
    if (node.right) {return post(node.right)}
    results.push(node.val);
  }
  post(rootNode);

  return results;
}

console.log(postOrder(root));
 
function breadth ( rootNode ) {
  const output = []
  const q = new queue()
  q.enqueue(rootNode);
   while (q.head){
    let temp = q.head;
    if (temp.LC){
      q.enqueue(temp.LC)
    }
    if (temp.RC){
      q.enqueue(temp.RC)
    }
    output.push(q.dequeue());
   }
  return output;
}

console.log(breadth(root))
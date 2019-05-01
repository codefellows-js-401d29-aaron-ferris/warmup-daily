'use strict'
const trees = require('../../data-structures-and-algorithms/binarytreeweek/tree/tree.js')
const queue = require('../../data-structures-and-algorithms/queueandstackweek/stackAndQueue/stacksAndQueues').Queue;

const BST = trees.BinarySearchTree;

let tree= new BST;

tree.add(20);
tree.add(10)
tree.add(30)
tree.add(5)
tree.add(15)
tree.add(25)
tree.add(35)

const breadth = function(tree){
  const Q = new queue;
  Q.enqueue(tree.root)
  let current = Q.front.data
  console.log(current)
  if(!current.data){
    return current;
  }

  while(Q.front.data){
    console.log('breadth', current.data)
    if(current.leftChild){
      Q.enqueue(current.leftChild);
    }
    if(current.rightChild){
      Q.enqueue(current.rightChild);
    }
    Q.dequeue();
    if(!Q.front){
      break
    }
    current=Q.front.data
  } 

}

breadth(tree);

const preorder = function(node){
  console.log('preorder', node.data);
  if(node.leftChild){
    preorder(node.leftChild);
  }
  if(node.rightChild){
    preorder(node.rightChild)
  }
}

preorder(tree.root);

const inorder = function(node){
  if(node.leftChild){
    inorder(node.leftChild);
  }
  console.log('inorder', node.data);
  if(node.rightChild){
    inorder(node.rightChild)
  }
}

inorder(tree.root);

const postorder = function(node){
  if(node.leftChild){
    postorder(node.leftChild);
  }
  if(node.rightChild){
    postorder(node.rightChild)
  }
  console.log('postorder', node.data);
}

postorder(tree.root);


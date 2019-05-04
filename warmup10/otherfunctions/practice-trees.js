'use strict';
class TreeNode {
  constructor(value){
    this.val = value;
    this.LC = null;
    this.RC = null
  }
}

const root = new Treenode(values[0]);
root.LC = new Treenode(values[1]);
root.RC = new Treenode(values[2]);
root.LC.LC = new Treenode(values[3]);
root.LC.RC = new Treenode(values[4]);
root.RC.LC = new Treenode(values[5]);
root.RC.RC = new Treenode(values[6]);

function preOrder(root){
  let results = []

  const pre = node => {
    results.push(node.val);
    if (node.left) {return pre(node.left)}
    if (node.right) {return pre(node.right)}
  }
  pre(root);

  return results;
}

function inOrder(root){
  let results = []

  const inO = node => {
    if (node.left) {return inO(node.left)}
    results.push(node.val);
    if (node.right) {return inO(node.right)}
  }
  inO(root);

  return results;
}

function postOrder(root){
  let results = []

  let post = node => {
    if (node.left) {return post(node.left)}
    if (node.right) {return post(node.right)}
    results.push(node.val);
  }
  post(root);

  return results;
}

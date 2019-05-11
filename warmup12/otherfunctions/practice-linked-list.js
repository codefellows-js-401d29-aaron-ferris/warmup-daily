'use strict';
class LLnode{
  constructor (value){
    this.val = value
    this.next = null
  }
}
const values = [1,2,3,4,5,6,7]
const LL = new LLnode(values[0]);
const current = LL
for(let i = 1; i< values.length; i++){
  current.next = new LLnode(value[i]);
  current=current.next;
}

let walk = (LL) => {
  const output = []
  const current = LL;
  while(current){
    output.push(current.val);
    current= current.next;
  }
  console.log(output);
}

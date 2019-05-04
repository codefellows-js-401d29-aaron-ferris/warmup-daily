class Node {
  constructor(value){
    this.val=value;
    this.next=null;
  }
}
class Stack {
  constructor(value){
    this.top = new Node(value)
  }
  push = (val) => {
    let newTop = new Node(val)
    newTop.next = this.top;
    this.top=newTop;
  }
  pop = () => {
    if(this.top){
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.val;
    }
  }
} 
array = [1,2,3,4,5,6,7]
const stack = new Stack (array[0]);
for( let i = 1; i<array.length; i++){
 stack.push(array[i]);
}

const goThrough = stack => {
  while(stack.top){
    console.log(stack.pop());
  }
}
goThrough(stack);
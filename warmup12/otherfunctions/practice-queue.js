class Node {
  constructor(value){
    this.val= value;
    this.next = null
  }
}

class queue {
  constructor(value){
    value ? this.head= new Node (value): this.head = null;
    value ? this.tail= new Node (value): this.tail = null;
  }
  enqueue = (value) => {
    if (!value){ return null }
    if(!this.head){ 
      this.tail = new Node(value)
      this.head = new Node (vaule)

    } else if(this.tail===this.head){
      this.head.next = new Node(value);
      this.tail = this.head.next;
    } else {
      this.tail.next = new Node(value);
      this.tail=this.tail.next;
    }
  }
  dequeue = () => {
    if(!this.head){
      return null
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return temp.val
    }
  }
}

let values = [1,2,3,4,5,6,7]
q = new Queue (values[0])
for( let i = 1; i<values.length; i++){
  q.enqueue(values[i]);
}

function goThru(queue) {
  while (queue.head){
    console.log(queue.dequeue())
  }
}
goThru(q);
module.exports =  queue;
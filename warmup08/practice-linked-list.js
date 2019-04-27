const LL = require('../../data-structures-and-algorithms/linkedlistweek/linkedList/linked-list.js').LinkedList;

let Linked = new LL();
Linked.append('do');
Linked.append('re');
Linked.append('mi');
Linked.append('fa');
Linked.append('so');
Linked.append('la');
Linked.append('ti');
Linked.append('do');



function print(list) {
  let current = list.head;
  while(current) {
    console.log(current.val);
    current = current.next;
  }
  console.log(current);
}

print(Linked);

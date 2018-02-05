class LinkedList {

    constructor() {
        this.head = null;
    }
    push(value) {
        if (this.head == null) this.head = new NodeLinkedList(value);
        else{
            var current = this.head;
            while(current.next != null) current = current.next;
            current.next = new NodeLinkedList(value);
        }
    }
}
class NodeLinkedList {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

let ll = new LinkedList();  
// add
ll.push(235);  
ll.push(245);  
ll.push(123);

console.log(ll.head.value);
console.log(ll.head.next.value);
console.log(ll.head.next.next.value);

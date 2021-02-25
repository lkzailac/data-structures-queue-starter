// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below using a NODE implementation
// (your Queue should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  //accesses back
  enqueue(element) {
    let newNode = new Node(element);

    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
    } else {
      let prevBack = this.back;
      this.back = newNode;
      //this.front.next = newNode;
      this.length++;

      prevBack.next = newNode;
      //[value:1,         value:2,         value:3,            value:4]
      //front                              prevBack            back
      //next:2            //next:3         //next:4
      //make sure the previous "last" having the next-property of newnode
    }
    return this.length;
  }
  //accesses front
  dequeue() {
    if(!this.length) return null;
    let first = this.front.value;

    if(this.length === 1) {
        this.front = null;
        this.back = null;
        this.length--;
    } else {
        this.front = this.front.next;
        this.length--;
    }
    return first;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Queue = Queue;

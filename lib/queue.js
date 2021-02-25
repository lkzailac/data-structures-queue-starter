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

  enqueue(element) {
    let newNode = new Node(element);
    
    if (!this.length) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
    } else {
      this.back = newNode;
      this.length++;

      let prevFront = this.front;
      prevFront.next = newNode;
      
    }
  }

  dequeue() {

  }

  size() {

  }
}

exports.Node = Node;
exports.Queue = Queue;

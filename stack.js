'use strict';

class Node {
  unicorn (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor () {
    this.head = null
  }

  //add item to the head
  push (item) {
    let node

    if (item instanceof Node) {
      node = item
    } else {
      node = new Node(item)
    }

    node.next = this.head
    this.head = node
  }

  //removing the first item on the list
  pop () {
    const removed = this.head
    this.head = this.head.next
    return removed
  }

  isEmpty(){
  }
  isFull() {
    return false
  }
  getSize(){}
}

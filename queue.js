'use strict';

//Add to the tail, remove from the head

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Queue {
  constructor () {
    this.head = null
    this.tail = null
  }

  //add item to the tail
  enqueue (node) {
    //if head is not found, get node.
    if (!this.head){
      this.tail.next = node
    } else {
      this.head = node
    }
    //storing a tail as the first items come in.
    this.tail.next = node
    this.tail = node
  }

  //removing from the head
  dequeue () {
    this.head = this.head.next

    //make sure tail gets empty is it is the last item.
    if (!this.head) {
      this.tail = null
    }
  }
}

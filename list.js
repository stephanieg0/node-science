'use strict'

//Data structure where last is the fist.

//class with constructor function
class Node {
  constructor (data){
    this.payload = data
    this.next = null
  }
}

//new node.
//A node just has a reference which links to a nother node.
const h = new Node('hello')
//console.log(h);


class List {
  constructor () {
    this.head = null
    this.tail = null
  }
  addHead (node) {
    node.next = this.head
    this.head = node
  }

  addTail (node) {
    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
     }
   }

  removeTail () {
    let current = this.head
    //looping through the list to find the previous to the tail.
    while (current.next !== this.tail) {
      current = current.next
    }

    current.next = null
    this.tail = current
  }

  removeHead() {
    this.head = this.head.next
  }

  //looping through the list to find the index
  get (index) {
    let current = this.head

    for (;index > 0; index--) {
      current = current.next
    }

    return current
  }
}

const list = new List;
list.addTail(new Node('A'))
list.addTail(new Node('B'))
list.addTail(new Node('C'))
list.addTail(new Node('D'))
list.addTail(new Node('E'))
list.addTail(new Node('F'))

console.log(list);


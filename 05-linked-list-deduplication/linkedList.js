class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  print() {
    let listString = "";
    let current = this.head;
    while (current !== null) {
      listString += `${current.val} => `;
      current = current.next;
    }
    console.log(listString);
  }
}

/**
 * dedupLinkedList takes a list.
 * The return value is a list
 * @param {list} SinglyLinkedList - linked list
 * @returns SinglyLinkedList
 */
function dedupLinkedList(list) {
  let valuesSeen = {};
  let current = list.head;
  let previous = list.head;

  while (current !== null) {
    if (valuesSeen[current.val] === true) {
      //Leave "previous" where it is and drop link to current
      previous.next = current.next;
    } else {
      valuesSeen[current.val] = true; // log that we've seen this value
      //Move "previous" forward by 1 node
      previous = current;
    }
    //Move "current" forward by 1 node
    current = current.next;
  }
}

// Create a linked list with the data from Inputs.txt
// pass list to your function
// console.log your values
const linkedList1 = new SinglyLinkedList();
linkedList1.push("Google");
linkedList1.push("Facebook");
linkedList1.push("Google");
linkedList1.push("Amazon");

const linkedList2 = new SinglyLinkedList();
linkedList2.push("Google");
linkedList2.push("Facebook");
linkedList2.push("Amazon");
linkedList2.push("Google");
// Create tests that take in your inputs and test them here

console.log("-------------------");
console.log("LL #1");
linkedList1.print();
dedupLinkedList(linkedList1);
linkedList1.print();
console.log("-------------------");
console.log("LL #2");
linkedList2.print();
dedupLinkedList(linkedList2);
linkedList2.print();

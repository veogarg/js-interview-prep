// class Queue {
//     constructor() {
//         this.arr = [];
//     }
//     isEmpty(){
//         return this.arr.length === 0
//     }
//     enqueue(value) {
//         this.arr.push(value);
//     }
//     dequeue() {
//         if(this.isEmpty()) return null;
//         const firstElm = this.arr[0];
//         this.arr.shift();
//         return firstElm;
//     }
//     peek(){
//         if(this.isEmpty()) return null;
//         return this.arr[0];
//     }
//     size(){
//         return this.arr.length
//     }
//     print(){
//         return this.arr.toString()
//     }
// }

class Queue {
  constructor() {
    this.arr = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.arr[this.rear] = value;
    this.rear++;
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
    return item;
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.front];
  }
  print() {
    return this.arr;
  }
}

class CirclularQueue {
  constructor(n) {
    this.arr = new Array(n);
    this.front = -1;
    this.rear = -1;
    this.cap = n;
    this.size = 0;
  }

  isFull() {
    return this.size === this.cap;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.front];
  }
  enqueue(value) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.cap;
      this.arr[this.rear] = value;
      this.size++;
      if (this.front === -1) {
        this.front = this.rear; // or 0
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.arr[this.front];
    this.arr[this.front] = null;
    this.front = (this.front + 1) % this.cap;
    this.size--;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  print() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    }
    let str = [];
    for (let i = this.front; i !== this.rear; i = (i+1)%this.cap) {
      str.push(this.arr[i]);
    }
    str.push(this.arr[this.rear]);
    return str.toString();
  }
}

function main() {
//   const q = new Queue();
//   q.enqueue(5);
//   q.enqueue(10);
//   q.enqueue(20);
//   q.enqueue(40);
//   console.log(Object.values(q.print()));
//   q.dequeue();
//   console.log(Object.values(q.print()));

    const cq = new CirclularQueue(5);
    console.log(cq.print());
    cq.enqueue(10);
    cq.enqueue(20);
    cq.enqueue(30);
    cq.enqueue(40);
    cq.enqueue(50);
    console.log(cq.print());
    cq.dequeue()
    console.log(cq.print());
    cq.enqueue(5);
    console.log(cq.print())

}
main();

const {LinkedList} = require('./LinkedList');

class LLQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        return this.list.append(value);
    }
    dequeue(){
        return this.list.removeHead();
    }
    peek(){
        return this.list.head.value
    }
    getSize(){
        return this.list.getSize();
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    print(){return this.list.print()}
}

const q = new LLQueue();
console.log(q.isEmpty());

q.enqueue(50)
q.enqueue(60)
q.enqueue(70)
console.log(q.getSize())
console.log(q.print())
q.dequeue()
q.enqueue(55)
q.enqueue(65)
q.enqueue(75)
// q.dequeue()
// q.dequeue()
console.log(q.print())
console.log(q.getSize())
console.log(q.peek());
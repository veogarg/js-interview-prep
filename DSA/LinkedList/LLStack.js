const {LinkedList} = require('./LinkedList');

class LLStack{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        return this.list.prepend(value);
    }
    pop(){
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

const stack = new LLStack();
console.log(stack.isEmpty());

stack.push(50)
stack.push(60)
stack.push(70)
console.log(stack.getSize())
console.log(stack.print())
stack.pop()
stack.push(55)
stack.push(65)
stack.push(75)
// stack.pop()
// stack.pop()
console.log(stack.getSize())
console.log(stack.print())
console.log(stack.peek());
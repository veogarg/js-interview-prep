class Stack{
    constructor(n){
        this.stack = [];
        this.top = -1
        this.cap = n
    }
    print(){
        return this.stack.toString();
    }
    push(val){
        if(this.top < this.cap-1) {
            this.top++;
            this.stack[this.top] = val;
        }
    }
    pop(){
        if(!this.isEmpty()){
            const topElement = this.peek()
            this.top--
            return topElement
        }
    }
    peek(){
        return this.stack[this.top];
    }
    isEmpty(){
        return this.top === -1;
    }
}

module.exports = Stack;
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
        if(!this.isEmpty()) this.top--;
    }
    peek(){
        return this.stack[this.top];
    }
    isEmpty(){
        return this.top === -1;
    }
}



function stockSpan() {
    const stack = new Stack(10);
    const stockArr = [60,10,20,40,35,30,50,70,65];
    stack.push(0);// for first element
    const spanArr = [1];
    for(let i = 1; i<stockArr.length; i++) {
        while(!stack.isEmpty() && stockArr[stack.peek()] <= stockArr[i]){
            stack.pop();
        }
        if(stack.isEmpty()){
            spanArr.push(i+1);
        }else {
            spanArr.push(i-stack.peek());
        }
        stack.push(i);
    }
    console.log(spanArr.toString());
}

// stockSpan();

function printPrevGreater(){
    const stack = new Stack(10);
    const stockArr = [60,10,20,40,35,30,50,70,65];
    stack.push(0);// for first element
    const prevGreaterArr = [-1];
    for(let i = 1; i<stockArr.length; i++) {
        while(!stack.isEmpty() && stockArr[stack.peek()] <= stockArr[i]){
            stack.pop();
        }
        prevGreaterArr.push(stack.isEmpty() ? -1 : stockArr[stack.peek()]);
        stack.push(i);
    }
    console.log(prevGreaterArr.toString());
}

// printPrevGreater()

function printNextGreater(){
    const stack = new Stack(9);
    const stockArr = [60,10,20,40,35,30,50,70,65];
    stack.push(stockArr.length-1);// for first element
    const nextGreaterArr = [-1];
    for(let i = stockArr.length-2; i>=0; i--) {
        while(!stack.isEmpty() && stockArr[stack.peek()] <= stockArr[i]){
            stack.pop();
        }
        nextGreaterArr.push(stack.isEmpty() ? -1 : stockArr[stack.peek()]);
        stack.push(i);
    }
    console.log(nextGreaterArr.reverse().toString());
}
// [70, 20, 40, 50, 50, 50, 70, -1, -1]
printNextGreater()
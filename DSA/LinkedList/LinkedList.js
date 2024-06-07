class Node {
    constructor(value) {
        this.next = null;
        this.value = value
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        }else {
            const headNode = this.head
            newNode.next = headNode
            this.head =  newNode
        }
        this.size++;
    }

    append(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
        }else {
            let lastNode = this.head
            while(lastNode.next){
                lastNode = lastNode.next
            }
            lastNode.next = newNode
        }
        this.size++;
    }

    insert(value, index){
        if(index < 0  || index>this.size){
            return null;
        }
        if(index === 0 ) this.prepend(value);
        else {
            const newNode =  new Node(value);
            let prev =  this.head;
            for(let i =0; i<index-1;i++){
                prev = prev.next
            }
            newNode.next = prev.next;
            prev.next = newNode
        }
    }

    remove(index){
        if(index < 0||index>this.size) return null
        let removedNode;
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else {
            let prev =  this.head;
            for(let i=0; i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
            this.size--;
            return removedNode.value
        }
    }

    removeVal(){}

    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i =0;
        let curr =  this.head;
        while(curr){
            if(curr.value == value){
                return i;
            }
            curr= curr.next;
            i++;
        }
        return -1;
    }

    reverse(){
        let prev= null;
        let curr = this.head;
        while(curr){
            let next = curr.next;
            curr.next =  prev
            prev = curr;
            curr = next;
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){ return null;}
        let currentNode = this.head
        let list = "";
        while(currentNode){
            list += `${currentNode.value} `
            currentNode = currentNode.next;
        }
        return list;
    }
}

class LinkedListWithTail {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    print(){
        if(this.isEmpty()){ return null;}
        let currentNode = this.head
        let list = "";
        while(currentNode){
            list += `${currentNode.value} `
            currentNode = currentNode.next;
        }
        return list;
    }

    prepend(value) {
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
            this.tail= newNode;
        }else {
            const headNode = this.head
            newNode.next = headNode
            this.head =  newNode
        }
        this.size++;
    }
    append(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++;
    }
    removeHead(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeTail(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value
    }

}

const list = new LinkedList();
console.log(list.print())
list.prepend(10);

// list.head = new Node(5);
// list.head.next = new Node(7);
// list.head.next.next = new Node(6);
// list.head.next.next.next = new Node(8);

list.prepend(20)
list.prepend(30)
console.log(list.print())
list.append(10);
list.append(20)
list.append(30)
console.log(list.print())
list.insert(50, 0);
console.log(list.print())
list.insert(5, 5)
console.log(list.print())


module.exports = {
    LinkedList: LinkedListWithTail
};
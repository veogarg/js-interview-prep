class TwoStacks {
    constructor(arrSize) {
        this.arr = new Array(arrSize);
        this.cap = arrSize;
        this.top1 = -1;
        this.top2 = arrSize;
    }

    push1(val){
        if(this.top1<this.top2-1){
            this.top1++
            this.arr[this.top1] = val
            return true
        }
        return false
    }
    push2(val){
        if(this.top1<this.top2-1){
            this.top2--
            this.arr[this.top2] = val
            return true
        }
        return false
    }
    pop1(){
        if(this.top1>=0){
            let x = this.arr[this.top1]
            this.top1--;
            return x;
        }
        return false;
    }
    pop2(){
        if(this.top2<this.cap){
            let x = this.arr[this.top2]
            this.top2++;
            return x;
        }
        return false;
    }
    size1(){
        return this.top1+1
    }
    size2(){
        return this.cap - this.top2
    }
}
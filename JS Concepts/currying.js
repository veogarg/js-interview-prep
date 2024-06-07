let multiply = function (x, y) {
    console.log(x*y);
}

// currying using bind

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(5)
let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(5)

// using closure
let mul = function(x) {
    return function (y) {
        console.log(x*y)
    }   
}
mul(2)(3);

let mul2 = (x) => (y) => console.log(x*y)
mul2(2)(3);




/**
 * sum(1)(2)....(n)()
 * eg: sum(1)(2)(3)(4)() = 10
 */

// Implementation 1

/* function sum(a){
    return function(b){
        if(b){
            return sum(a+b)
        }else {
            return a;
        }
    }
} */

// Implementation 2
/* const sum = (a) => {
    return (b) => {
        return b? sum(a+b):a
    }
} */

// Implementation 3
const sum = (a) => (b) => b?sum(a+b):a

console.log(sum(1)(2)(3)(4)(5)(6)())
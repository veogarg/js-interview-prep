/* let name = {
  firstName: "Vikas",
  lastName: "Garg",
};

let printName = function (place) {
  console.log(
    `Hello! My name is ${this.firstName} ${this.lastName} from ${place}`
  );
};

let myName = printName.bind(name, "Panipat");
myName();

Function.prototype.newbind = function (...args) {
  let _this = this;
  return function () {
    _this.call(...args);
  };
};

let myNameAgain = printName.newbind(name, "Panipat");
myNameAgain(); */

/* function sum(a, b) {
  console.log("sum called");
  return a + b;
}

function sub(a, b) {
  console.log("sub called");
  return a - b;
}

function memoWrapper(func) {
  let memo = {};
  return function f(a, b) {
    memo[a] = Boolean(memo[a]) ? memo[a] : {};
    let value;
    if (Boolean(memo[a][b])) {
      value = memo[a][b];
    } else {
      value = func(a, b);
      memo[a][b] = value;
    }
    return value;
  };
}

const wrapper = memoWrapper(sum);
console.log(wrapper(1, 2));
console.log(wrapper(1, 3));
console.log(wrapper(1, 2)); */

/* A = [1, 3, 6, 2, 6, 4, 10, 13, 11, 12];

console.log(
  "Inbuilt function: ",
  A.sort((a, b) => (a < b ? 1 : -1))
);

for (let i = 0; i < A.length - 1; i++) {
  for (let j = i + 1; j < A.length; j++) {
    if (A[i] < A[j]) {
      A[j] = A[i] + A[j];
      A[i] = A[j] - A[i];
      A[j] = A[j] - A[i];
    }
  }
}
console.log("custom function: ", A); */

0, 1, 1, 2, 3, 5, 8, 13, 21, 34;

function fib(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return a;
  }
  if (n === 2) return b;

  c = fib(n - 1) + fib(n - 2);
  return c;
}

console.log(fib(11));

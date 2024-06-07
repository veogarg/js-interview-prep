// Call method

const person1 = {
  firstName: "Vikas",
  lastName: "Garg",
  printName: function (age) {
    console.log(
      `Hello I am ${this.firstName} ${this.lastName}, ${age} years old`
    );
  },
};
person1.printName(25);

const person2 = {
  firstName: "Veo",
  lastName: "Garg",
};

function consoleName(age) {
  console.log(
    `Hello I am ${this.firstName} ${this.lastName}, ${age} years old`
  );
}

consoleName.call(person1, 25);
consoleName.call(person2, 25);

// Pollyfill for call
Function.prototype.myCall = function (obj = {}, ...args) {
  //   console.log(this);
  // console.log(typeof this);
  if (typeof this !== "function") throw new Error("not callable");

  obj.fn = this;
  obj.fn(...args);
  delete obj.fn
};

consoleName.myCall(person1, 33);
consoleName.myCall(person2, 33);

// Apply
function outputName(age, city, country) {
  console.log(
    `Hello I am ${this.firstName} ${this.lastName}, ${age} years young from ${city}, ${country}`
  );
}

outputName.apply(person1, [25, "New Delhi", "India"]);

// Pollyfill for apply
Function.prototype.myApply = function (obj = {}, args) {
    // console.log(this);
    // console.log(...args);
//   console.log(typeof this);
  if (typeof this !== "function") throw new Error("not callable");

    if(!Array.isArray(args)) throw new Error("TypeError: CreateListFromArrayLike called on non-object")

  obj.fn = this;
  obj.fn(...args);

  delete obj.fn
};

outputName.myApply(person2, [33, "New Delhi", "India"]);


// Bind Method
// const newFn = outputName.bind(person1, 25);
// newFn("New Delhi", "India")

//Pollyfill for bind
Function.prototype.myBind = function(obj={}, ...args1) {
    if (typeof this !== "function") throw new Error("not callable");
    obj.fn = this
    return function(...args2) {
        obj.fn(...args1, ...args2)
    }
}
const newFn = outputName.myBind(person1, 25);
newFn("Delhi", "India")
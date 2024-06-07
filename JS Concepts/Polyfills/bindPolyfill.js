let name1 = {
    firstName: "Vikas",
    lastname: "Garg",
}

function printName(hometown, country){
    console.log(`${this.firstName} ${this.lastname}, from ${hometown}, ${country}`)
}
const printMyName = printName.bind(name1, "Delhi", "India");
// printMyName()

// Polyfill for bind method
// Function.prototype.myBind = function(...args){
//     // this -> printName
//     const obj = this
//     const params = args.slice(1);
//     return function(...args2){
//         // obj.call(args[0])
//         obj.apply(args[0], [...params, ...args2])
//     }
// }

// const printMyBindName = printName.myBind(name1, "Delhi")
// printMyBindName("India")

Function.prototype.myBind = function(...args){
    const context = this
    const params = args.slice(1);
    return function(...args2){
        context.apply(args[0], [...params, ...args2])
    }
}

const printMyBindName = printName.myBind(name1, "Delhi")
printMyBindName("India")
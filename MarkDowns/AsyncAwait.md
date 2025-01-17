## Async Await in JavaScript

* **Async/Await vs Promises:**
    * Async/Await is a syntactical sugar over Promise native methods, making asynchronous code easier to read and write.
    * It's always a good idea to return a promise from an async function, even if it's not explicitly stated.
    * Async/Await functions can be used with other promises, and the order in which they are called doesn't matter.
* **Key characteristics of Async/Await:**
    * Async functions always return a promise, either explicitly or by wrapping the returned value in a promise.
    * The `await` keyword pauses the execution of an async function until the promise it's waiting on resolves or rejects.
    * Async/Await allows for error handling using try-catch blocks, similar to synchronous code.
* **Benefits of using Async/Await:**
    * Makes asynchronous code look more like synchronous code, improving readability and maintainability.
    * Avoids callback hell, a common issue with traditional promise chaining.
    * Simplifies error handling with try-catch blocks.

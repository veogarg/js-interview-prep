## Promise APIs in JavaScript

1. **Promise.all:**
    * Waits for all promises in an array to resolve before continuing.
    * Rejects if any promise in the array rejects.
    * Resolves with an array of resolved values from all promises.

2. **Promise.allSettled:**
    * Waits for all promises in an array to settle (resolve or reject).
    * Resolves with an array of objects containing status ("fulfilled" or "rejected") and value/reason for each promise.

3. **Promise.race:**
    * Resolves or rejects as soon as the first promise in an array settles.
    * Uses the value/reason of the first settled promise.

4. **Promise.any:**
    * Resolves with the value of the first resolved promise in an array.
    * Rejects with an AggregateError if all promises reject.

---

> **Key Lingo:**
    - **settle**: promise completes (resolve or reject)
    - **resolve**: promise succeeds
    - **reject**: promise fails
    - **fulfilled**: resolved successfully
    - **rejected**: failed with reason


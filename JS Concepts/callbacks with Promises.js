const carts = ["shoes", "kurta", "pants"];

/**
 * Callbacks
 * - a function passed as an argument to another function
 * - Asynchronous operation/programming exists in JS just because of callbacks
 * - A callback function can run after another function has finished
 */

/**
 * Callback hell => Problem 1
 *  - one callback another callback inside another
 *  - code starts to grow horizontally instead vertically
 *  - Structure is known as : PYRAMID OF DOOM
 */

/**
 * Inversion of Control => Problems 2
 * - Loosing control over code/functions/callbacks while using callbacks
 */

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// USING PROMISES NOW

createOrder(cart, function () {
  proceedToPayment(function () {
    // Problem of Inversion of control occurs here
    showOrderSummary(function () {
      updateWallet();
    });
  });
});

// With Promises
const promise = createOrder(cart); // consider promise an object with some data
/**
 * initially {data: undefined}
 * after some time { data: orderDetails}
 */

// now we an use then to attach (not pass) callback function to this promise object
promise.then(function (orderId) {
  proceedToPayment(orderId); // resolves the problem of inversion of control as control lies with us only.
});

// Final thing of above example
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((orderSummary) => updateWallet(orderSummary));

// Another example
const GITHUB_API = "https://api.github.com/users/veogarg";
const user = fetch(GITHUB_API); // will return a promise

user.then((data) => {
  console.log(data);
});

/*****************************************************************************************
 * PROMISE: A promise is an object representing the eventual completion or failure of an asynchronous operation. // From MDN
 * 1) Promise object contains 3 keys
 * - Prototype: Object
 * - Promise State (pending / fulfilled / rejected)
 * - PromiseResult: response having data or error
 *
 * 2) Promise Objects are immutable
 *****************************************************************************************/

// Consumer Part : Promise Chain
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    // this will catch only promises before this and later callbacks will be called
    console.log(err.message);
  })
  .then((orderId) => {
    // will run even if there is some error in createOrder
    return processToPayment(orderId);
  })
  .then((paymentInfo) => updateWallet(paymentInfo))
  .catch((error) => {
    // this will catch any error inside the chain
    console.log(error.message);
  })
  .then(function () {
    console.log("No matter wjat happens above, I'll be called");
  });

//Producer Part : Create a Promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // Provided by JS
    // Create some order
    // Validate Cart
    // OrderId is obtained
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // Logic for creatOrder
    const orderId = "12345"; // some dummy order id after some logic
    if (orderId) {
      //   resolve(orderId);
      setTimeout(function () {
        resolve(orderId);
      }, 1000);
    }
  });
  return pr;
}

function processToPayment(orderid) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successful");
  });
}

function validatecart(cart) {
  // return true
  return false;
}

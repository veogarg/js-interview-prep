const counterDiv = document.getElementById("counter");

console.log({ counterDiv });
let count = 10;
let interval;

// Approch 1
interval = setInterval(() => {
  if (count >= 0) counterDiv.innerHTML = count--;
  else clearInterval(interval);
}, 1000);

// Approach 2
/* interval =
  count > 0
    ? setInterval(() => {
        counterDiv.innerHTML = count--;
      }, 1000)
    : clearInterval(interval); */

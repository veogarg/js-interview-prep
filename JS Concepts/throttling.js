document.getElementById("searchInput").addEventListener("keyup", () => {
  // console.log("key pressed");
  throttledSearch("vikas Garg", "Delhi");
});

const handleSearch = (name, city) => {
  console.log(`search called by ${name} in ${city}`);
};

const throttle = function (callbackFunction, delay) {
  // Approach 1
  /* let prevTimer = 0;
  return function (...args) {
    let nowTimer = new Date().getTime();
    if (nowTimer - prevTimer > delay) {
      prevTimer = nowTimer;
      callbackFunction(...args);
    }
  }; */

  // Approach 2

  let timer = null;
  return function (...args) {
    if (!timer) {
      callbackFunction(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};

const throttledSearch = throttle(handleSearch, 1000);

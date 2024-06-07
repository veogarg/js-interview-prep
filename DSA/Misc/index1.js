/* let obj = {
  a: {
    b: {
      d: "test1",
      e: "tset2",
    },
    c: "test2",
  },
  f: "test3",
};

const leafNodes = [];
let currObj = {};

function getLeafNodes(obj) {
  Object.keys(obj).map((key, index) => {
    if (typeof obj[key] !== "object") {
      leafNodes.push(key);
    } else if (typeof obj[key] === "object") {
      currObj = obj[key];
      getLeafNodes(currObj);
    }
  });
  return leafNodes;
}

console.log(getLeafNodes(obj));

let str = "faabbcfdde"; // c
const charObj = {};
for (let i of str) {
  charObj[i] = Boolean(charObj[i]) ? charObj[i] + 1 : 1;
}
console.log(charObj);
console.log(Object.keys(charObj).filter((key, index) => charObj[key] === 1)[0]); 

let num = 123;
let revNum = 0;
while (num >= 1) {
  let rem = num % 10;
  revNum = revNum * 10 + rem;
  num = parseInt(num / 10);
}

console.log(revNum);

let oldObj = {
  a: 0,
  b: {
    c: 1,
    d: 6,
  },
  e: 4,
};

let newObj = {
  a: 0,
  b: {
    c: 1,
    d: 5,
  },
  e: 2,
};

const trackChanges = [];
function compareObj(old, curr) {
  Object.keys(old).map((key, index) => {
    if (typeof old[key] !== "object") {
      let str;
      if (Boolean(curr[key]) && old[key] !== curr[key]) {
        str = `key ${key} has changed from ${old[key]} to ${curr[key]}}`;
      }
      trackChanges.push(str);
    } else {
      compareObj(old[key], curr[key]);
    }
  });
  return trackChanges;
}

console.log(compareObj(oldObj, newObj));*/

// Input: I love java5cript techn0logy
// Output: I evol tpir5cavaj ygoln0hcet

function updateStr(str) {
  const wordsArr = str.split(" ");
  const updatedWordsArr = wordsArr.map((word) => {
    return reverseWord(word);
  });
  return updatedWordsArr.join(" ");
}

const reverseWord = (word) => {
  // return word.split("").reverse().join("");
  let start = 0;
  let end = word.length - 1;
  let newWord = [...word];
  while (start < end) {
    if (!(Number(newWord[start]) < 10 || Number(newWord[end]) < 10)) {
      newWord[start] = newWord[end];
      newWord[end] = word[start];
    }
    start++;
    end--;
  }
  return newWord.join("");
};

console.log(updateStr("I love java5cript techn0logy"));

//Task: 05
function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
    return "Please provide a valid Array and Number!";
  } else if (changeArray.length === 0) {
    return "Please don't provide an empty Array!";
  } else {
    let sum = 0;
    for (let item of changeArray) {
      sum += item;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}

let arr = [1,5,5];
const result = canPay(arr, 10);
console.log(result);

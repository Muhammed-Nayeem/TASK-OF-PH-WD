//Task: 03
function sortMaker(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return "Please provide a valid Array of numbers and which length is equal to Two!";
  } else {
    const [n1, n2] = arr;
    if (n1 < 0 || n2 < 0) {
      return "Invalid Input";
    } else if (n1 > n2) {
      return [n1, n2];
    } else if (n2 > n1) {
      return [n2, n1];
    } else {
      return "equal";
    }
  }
}

// let arrOfNum = [2];
// let arrOfNum = [2, 3];
// let arrOfNum = [4, 2];
// let arrOfNum = [4, 4];
// let arrOfNum = [1, 2];
let arrOfNum = [4, -2];
const result = sortMaker(arrOfNum);
console.log(result);

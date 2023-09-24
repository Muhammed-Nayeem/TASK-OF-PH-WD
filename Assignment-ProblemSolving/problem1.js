//Task: 01
function cubeNumber(num) {
  if (typeof num !== "number" || num < 0) {
    return "Please provide a valid positive number!";
  } else {
    return num * num * num;
  }
}

const result = cubeNumber(5);
console.log(result);

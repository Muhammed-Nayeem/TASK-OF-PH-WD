const isInteger = (num) => {
  if (typeof num !== "number") {
    return "Please provide a valid number!";
  } else {
    if (num % 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
};

const result = isInteger(5.65);
console.log(result);

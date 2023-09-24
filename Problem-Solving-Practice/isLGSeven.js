function isLGSeven(num) {
  const fixValue = 7;
  if (typeof num !== "number") {
    return "Please provide a valid number!";
  } else {
    const differ = num - fixValue;
    if (differ < fixValue) {
      return differ;
    } else {
      return num * 2;
    }
  }
}

let result = isLGSeven(15);
console.log(result);

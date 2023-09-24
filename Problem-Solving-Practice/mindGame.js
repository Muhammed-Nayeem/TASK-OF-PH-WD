const mindGame = (n) => {
  if (typeof n !== "number") {
    return "Please provide a valid number!";
  } else if (n <= 0) {
    return "Please provide a positive number!";
  } else {
    let result = (((n * 3) + 10) / 2) - 5;
    return result;
  }
};

let result = mindGame(5);
console.log(result)

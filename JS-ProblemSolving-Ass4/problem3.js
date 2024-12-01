// Write a function called checkDigitsInNme() which will take a string parameter of name, you've to check weather the string contains number or not!

function checkDigitsInName(name) {
  const hasNumber = /\d/;

  if (typeof name === "string") {
    if (hasNumber.test(name)) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}

let result = checkDigitsInName(["Raj"]);
console.log("Has Number: ", result);

//Task: 02
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide a valid string for both parameter!";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

const result1 = matchFinder("John Doe", "ohn");
const result2 = matchFinder("JavaScript", "Code");
const result3 = matchFinder("Peter Parker", "Pen");
const result4 = matchFinder("Peter Parker", "pet");

console.log(result1, result2, result3, result4);

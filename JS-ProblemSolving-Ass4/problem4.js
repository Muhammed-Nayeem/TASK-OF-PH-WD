/**
 * ?Problem 4: Write a function called calculateFinalScore() which will take an object as a parameter and return the boolean value true/false based on the condition.
 * !Condition: 1)If final score greater then or equal to 80 then he can admit into university otherwise he can't. 2)Test Score must be less then or equal to 50, 3)School Grade must be less then 30, 4)And If the father's profession is Farmer then 20 marks will be added with his admission test.
 */

const studentInfo = {
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: true,
};

function calculateFinalScore(obj) {
  let total_score = 0;

  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    if (
      typeof obj.name === "string" &&
      typeof obj.testScore === "number" &&
      typeof obj.schoolGrade === "number" &&
      typeof obj.isFFamily === "boolean"
    ) {
      if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
        total_score =
          obj.isFFamily === true
            ? obj.testScore + obj.schoolGrade + 20
            : obj.testScore + obj.schoolGrade + 0;
        if (total_score >= 80) {
          return true;
        } else {
          return false;
        }
      } else {
        return "Invalid Input";
      }
    } else {
      return "Invalid Input";
    }
  } else {
    return "Invalid Input";
  }
}

const result = calculateFinalScore(studentInfo);
console.log("Could he admit into university? ", result);

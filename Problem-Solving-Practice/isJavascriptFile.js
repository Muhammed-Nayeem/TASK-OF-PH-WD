// const isJavascriptFile = (fileName) => {
//   if (typeof fileName !== "string") {
//     return "Please provide a valid String!";
//   } else {
//     if (fileName.endsWith(".js")) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

//ex: 2
const isJavascriptFile = (fileName) => {
  if (typeof fileName !== "string") {
    return "Please provide a valid String!";
  } else {
    let arr = fileName.split(".");
    let lastElement = arr.pop();
    return lastElement.toLowerCase() === "js";
    // if (lastElement.toLowerCase() === "js") {
    //   return true;
    // } else {
    //   return false;
    // }
  }
};

const result = isJavascriptFile("script.js");
console.log(result);

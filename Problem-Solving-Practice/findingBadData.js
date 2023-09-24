// function findingBadData(arr) {
//   if (!Array.isArray(arr)) {
//     return "Please Provide an Array!";
//   } else {
//     let badData = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] !== "number") {
//         return "Please Provide an Array of numbers element only!";
//       } else {
//         if (arr[i] < 0) {
//           badData++;
//         }
//       }
//     }
//     return badData;
//   }
// }

//Ex: 2
function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Please Provide an Array!";
  } else {
    let badData = 0;
    for(let element of arr) {
      if (typeof element !== "number") {
        return "Please provide an Array with the numbers element only!";
      } else {
        if (element < 0) {
          badData++;
        }
      }
    }
    return badData;
  }
}

let arrayOfNum = [1, 2, -5, -7, -13];
console.log(findingBadData(arrayOfNum));

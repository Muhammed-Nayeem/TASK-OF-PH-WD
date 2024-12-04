/**
 * ?Problem 5: Write a function called waitingTime() which will take two parameters, one is Array of times and another one is serial number. You've to calculate the time and find average and then return the waiting time.
 * !Condition: 1) First input should be an Array, 2) Second input should be a number, 3) Serial number must greater then the length of array. 
 */

const times = [ 3, 5, 7, 11, 6 ];
const serialNumber = 10;

function waitingTime(waitingTimes , serialNumber) {
  let sumOf_times = 0;
  let averageOf_times = 0;
  let waited_persons = 0;
  let waiting_times = 0;

  if (Array.isArray(waitingTimes) && typeof serialNumber === "number" && serialNumber > waitingTimes.length) {
    for (let i = 0; i < waitingTimes.length; i++) {
      sumOf_times += waitingTimes[i];
    }
    averageOf_times = sumOf_times / waitingTimes.length;
    waited_persons = serialNumber - 1 - waitingTimes.length;
    waiting_times = Math.round(averageOf_times) * waited_persons;
    return waiting_times;
  } else {
    return "Invalid Input";
  }
}

const waitingPeriod = waitingTime(times, serialNumber);
console.log("Israt have to wait approx : ", waitingPeriod);

function gemsToDiamond(f1, f2, f3) {
  if (typeof f1 !== "number" || typeof f2 !== "number" || typeof f3 !== "number") {
    return "Please provide the numbers for the required gems!";
  } else if (f1 < 0 || f2 < 0 || f3 < 0) {
    return "Please provide the positive numbers for the required gems!";
  } else {
    const friend1 = 21;
    const friend2 = 32;
    const friend3 = 43;
    const totalDiamond = (f1 * friend1) + (f2 * friend2) + (f3 * friend3);
    if (totalDiamond > 2000) {
      return totalDiamond - 2000;
    } else {
      return totalDiamond;
    }
  }
}

result = gemsToDiamond(100, 5, 1);
console.log(result);

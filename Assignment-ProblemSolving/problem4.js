//Task: 04
function findAddress(obj) {
  if (typeof obj !== "object") {
    return "Please provide a valid Object!";
  } else {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    obj = {
      street: street,
      house: house,
      society: society,
    };
    return Object.values(obj).join(",");
  }
}

let obj = {
  street: 10,
  // house: "15A",
  // society: "Earth Perfect",
};

const result = findAddress(obj);
console.log(result);

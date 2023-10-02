/**
 * Name: Deposit Functionality
 * getTextElementValueById: get previous deposit money
 * getTextElementValueById: get previous total balance
 * getInputFieldValueById: get current deposit money
 * setElementsValueById: set element new value using id
 */

let depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function () {
  let previousDeposit = getTextElementValueById("deposit");
  let previousBalance = getTextElementValueById("balance");
  let currentDeposit = getInputFieldValueById("deposit-money");

  //calculation total deposit money:
  let totalDeposit = previousDeposit + currentDeposit;
  setElementsValueById("deposit", totalDeposit);

  //calculation total balance money:
  let totalBalance = previousBalance + currentDeposit;
  setElementsValueById("balance", totalBalance);
});
 
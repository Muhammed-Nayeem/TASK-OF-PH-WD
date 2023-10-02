/**
 * Name: withdraw Functionality
 * getTextElementValueById: get previous deposit money
 * getTextElementValueById: get previous total balance
 * getInputFieldValueById: get current deposit money
 * setElementsValueById: set element new value using id
 */

let withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", function () {
  let previousWithdraw = getTextElementValueById("withdraw");
  let previousBalance = getTextElementValueById("balance");
  let currentWithdraw = getInputFieldValueById("withdraw-money");

  //calculation total withdraw money:
  let totalWithdraw = previousWithdraw + currentWithdraw;
  setElementsValueById("withdraw", totalWithdraw);

  //calculation total balance money:
  let totalBalance = previousBalance - currentWithdraw;
  setElementsValueById("balance", totalBalance);
});

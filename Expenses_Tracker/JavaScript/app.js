//Clickable Buttons:
const calculateExpenseButton = document.getElementById("calculate");
const calculateSavingsButton = document.getElementById("calculate-savings");

//Event Listener Of calculateExpenseButton:
calculateExpenseButton.addEventListener("click", function() {
  const allValues_obj = getInputValue("#income", "#software", "#courses", "#internet");
  const {incomeValue, softwareValue, coursesValue, internetValue} = allValues_obj;
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const totalBalance = incomeValue - totalExpenses;
  setTextFieldValue("total-expenses", "balance", totalExpenses, totalBalance);
  showSection("results");
});

//Event Listener Of calculateSavingsButton:
calculateSavingsButton.addEventListener("click", function() {
  const allValues_obj = getInputValue("#income", "#software", "#courses", "#internet");
  const {incomeValue, softwareValue, coursesValue, internetValue} = allValues_obj;
  let savingsAmount = getInputValueBySelector("#savings");
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const totalBalance = incomeValue - totalExpenses;
  const savings = (totalBalance * savingsAmount) / 100;
  const remainingBalance = totalBalance - savings;
  setTextFieldValue("savings-amount", "remaining-balance", savings, remainingBalance);
});

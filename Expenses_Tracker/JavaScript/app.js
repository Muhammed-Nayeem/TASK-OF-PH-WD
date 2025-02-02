//Clickable Buttons:
const calculateExpenseButton = document.getElementById("calculate");
const calculateSavingsButton = document.getElementById("calculate-savings");
const assistantTabButton = document.getElementById("assistant-tab");
const historyTabButton = document.getElementById("history-tab");

//Event Listener Of calculateExpenseButton:
calculateExpenseButton.addEventListener("click", function(e) {
  const allValues_obj = getInputValue("#income", "#software", "#courses", "#internet");
  const {incomeValue, softwareValue, coursesValue, internetValue} = allValues_obj;
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const totalBalance = incomeValue - totalExpenses;

  if (incomeValue < 0 || isNaN(incomeValue)) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  } if (softwareValue < 0 || isNaN(softwareValue)) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  } if (coursesValue < 0 || isNaN(coursesValue)) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  } if (internetValue < 0 || isNaN(internetValue)) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("income-error").classList.add("hidden");
    document.getElementById("software-error").classList.add("hidden");
    document.getElementById("courses-error").classList.add("hidden");
    document.getElementById("internet-error").classList.add("hidden");
    if (totalExpenses > incomeValue) {
      document.getElementById("logic-error").classList.remove("hidden");
      return;
    } else {
      document.getElementById("logic-error").classList.add("hidden");
      setTextFieldValue("total-expenses", "balance", totalExpenses,totalBalance);
      showSection("results");
      generateHistory(incomeValue, totalExpenses, totalBalance);
    }
  }
});

//Event Listener Of calculateSavingsButton:
calculateSavingsButton.addEventListener("click", function(e) {
  const allValues_obj = getInputValue("#income", "#software", "#courses", "#internet");
  const {incomeValue, softwareValue, coursesValue, internetValue} = allValues_obj;
  const totalExpenses = softwareValue + coursesValue + internetValue;
  const totalBalance = incomeValue - totalExpenses;
  let savingsAmount = getInputValueBySelector("#savings");

  if (savingsAmount < 0 || isNaN(savingsAmount)) {
    document.getElementById("savings-error").classList.remove("hidden");
    return;
  } else {
    document.getElementById("savings-error").classList.add("hidden");
    const savings = (totalBalance * savingsAmount) / 100;
    const remainingBalance = totalBalance - savings;
    setTextFieldValue("savings-amount", "remaining-balance", savings, remainingBalance);
  }
});

//Show and Hide Categories Event Listener:
assistantTabButton.addEventListener("click", function(e) {
  showCategories("expense-form");
  buttonActivation("assistant-tab");
});

historyTabButton.addEventListener("click", function(e) {
  showCategories("history-section");
  buttonActivation("history-tab");
}); 

//For Instant Validations:
document.getElementById("income").addEventListener("input", function(e) {
  const incomeValue = getInputValueBySelector("#income");
  realtimeInputValidation("income-error", incomeValue);
});

document.getElementById("software").addEventListener("input", function(e) {
  const softwarePrice = getInputValueBySelector("#software");
  realtimeInputValidation("software-error", softwarePrice);
});

document.getElementById("courses").addEventListener("input", function(e) {
  const coursesPrice = getInputValueBySelector("#courses");
  realtimeInputValidation("courses-error", coursesPrice);
});

document.getElementById("internet").addEventListener("input", function(e) {
  const internetBill = getInputValueBySelector("#internet");
  realtimeInputValidation("internet-error", internetBill);
});

document.getElementById("savings").addEventListener("input", function(e) {
  const savingsAmount = getInputValueBySelector("#savings");
  realtimeInputValidation("savings-error", savingsAmount);
});

let count = 0;

//Common Function For Instant Validation:
function realtimeInputValidation(id, input_value) {
  if (input_value < 0 || isNaN(input_value)) {
    document.getElementById(id).classList.remove("hidden");
    return;
  } else {
    document.getElementById(id).classList.add("hidden");
    return;
  }
}

//Common Function For Get Input Values:
function getInputValue(selector_1, selector_2, selector_3, selector_4) {
  let incomeValue = parseFloat(document.querySelector(selector_1).value);
  let softwareValue = parseFloat(document.querySelector(selector_2).value);
  let coursesValue = parseFloat(document.querySelector(selector_3).value);
  let internetValue = parseFloat(document.querySelector(selector_4).value);
  return {incomeValue, softwareValue, coursesValue, internetValue};
}

//Common Function For Get Input Values By QuerySelector:
function getInputValueBySelector(selector) {
  const inputValue = parseFloat(document.querySelector(selector).value);
  return inputValue;
}

//Common Function For Set TextField Values:
function setTextFieldValue(elementID_1, elementID_2, totalExpense, totalBalance) {
  let element_one = document.getElementById(elementID_1);
  let element_two = document.getElementById(elementID_2);
  element_one.innerText = totalExpense;
  element_two.innerText = totalBalance;
}

//Common Function For Show & Hide Sections:
function showSection(id) {
  document.getElementById("results").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

//Common Function For Categories Hide & show:
function showCategories(id) {
  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

//Common Function For Button Activation:
function buttonActivation(id) {
  if (id === "assistant-tab") {
    document.getElementById(id).classList.add("bg-gradient-to-r", "from-green-600", "to-green-400", "text-white");
    document.getElementById("history-tab").classList.remove("bg-gradient-to-r", "from-green-600", "to-green-400", "text-white");
  } else {
    document.getElementById(id).classList.add("bg-gradient-to-r", "from-green-600", "to-green-400", "text-white");
    document.getElementById("assistant-tab").classList.remove("bg-gradient-to-r", "from-green-600", "to-green-400", "text-white");
    document.getElementById("assistant-tab").classList.add("text-gray-600");
  }
}

//Utility Function For History Generate:
function generateHistory(income, expense, balance) {
  count += 1;
  const historyContainer = document.getElementById("history-list");
  let div = document.createElement("div");
  div.classList.add("mt-4", "from-blue-50", "to-purple-50", "p-4", "rounded-lg", "shadow-md", "border-l-2", "border-blue-500");
  div.innerHTML = `
  <p class="text-gray-500 text-sm font-bold">Serial: ${count}</p>
  <p class="text-gray-500 text-sm font-semibold">Date: ${new Date().toLocaleDateString()}</p>
  <p class="text-gray-500 text-sm font-semibold">Income: ${income}৳</p>
  <p class="text-gray-500 text-sm font-semibold">Expense: ${expense}৳</p>
  <p class="text-gray-500 text-sm font-semibold">Balance: ${balance}৳</p>
  `;
  historyContainer.insertBefore(div, historyContainer.firstChild);
}

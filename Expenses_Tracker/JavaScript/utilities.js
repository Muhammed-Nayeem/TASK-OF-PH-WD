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
  document.getElementById(id).classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
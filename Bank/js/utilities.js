function getInputFieldValueById(elementId) {
  let depositInput = document.getElementById(elementId);
  let depositValue = depositInput.value;
  let currentDepositMoney = parseFloat(depositValue);
  depositInput.value = "";
  return currentDepositMoney;
}

function getTextElementValueById(elementId) {
  let depositElement = document.getElementById(elementId);
  let depositElementValue = depositElement.innerText;
  let previousDepositMoney = parseFloat(depositElementValue);
  return previousDepositMoney;
}

function setElementsValueById(elementId, elementValue) {
  let depositElement = document.getElementById(elementId);
  depositElement.innerText = elementValue;
}

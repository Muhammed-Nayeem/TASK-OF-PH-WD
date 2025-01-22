//Common Function: To Get Input Value
function getInputValueById(id) {
  let inputFieldValue = document.getElementById(`${id}`).value;
  let inputFieldNumber = parseFloat(inputFieldValue);
  return inputFieldNumber;
}

//Common Function: To Get Text Field Value
function getTextFieldValueById(id) {
  let textFieldValue = document.getElementById(`${id}`).innerText;
  let textFieldNumber = parseFloat(textFieldValue);
  return textFieldNumber;
}

//Common Function: To Get Cause Title
function getTitleById(id) {
  let causeTitle = document.getElementById(`${id}`).innerText;
  return causeTitle;
}

//Common Function: To Set Value
function setTextValueById(id_1, id_2, currentBalance, totalBalance) {
  document.getElementById(`${id_1}`).innerText = currentBalance;
  document.getElementById(`${id_2}`).innerText = totalBalance;
}

//Common Function: To Clear Input Field
function clearInputFieldById(id) {
  document.getElementById(`${id}`).value = "";
}

//Common Function: Donation & History Option
function showCategoriesOption(id) {
  document.getElementById("donation").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");
  document.getElementById(`${id}`).classList.remove("hidden");
}

//Common Function: Active Button
function activeButton(id) {
  document.getElementById("donation_btn").classList.add("btn-active", "transition-all");
  document.getElementById("history_btn").classList.add("btn-active", "transition-all");
  document.getElementById(`${id}`).classList.remove("btn-active");
}

//Generate History Elements:
function transactionSummary(donation_title, donation_money) {
  let date = new Date();
  let transactionContainer = document.getElementById("history_container");
  let historyDiv = document.createElement("div");
  historyDiv.className = "border px-5 py-5 rounded";
  historyDiv.innerHTML = `
    <h2 class="text-xl text-black, font-bold mb-2">${donation_money} Taka is donated for, ${donation_title}</h2>
    <p class="text-sm text-gray-500">Date: ${date.toDateString()} ${date.toTimeString()}</p>
  `;
  transactionContainer.appendChild(historyDiv);
}

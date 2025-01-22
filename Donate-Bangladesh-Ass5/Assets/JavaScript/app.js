//Donation Calculation Function:
const donationMoneyHandlerOne = document.getElementById("cd_btn-one");
const donationMoneyHandlerTwo = document.getElementById("cd_btn-two");
const donationMoneyHandlerThree = document.getElementById("cd_btn-three");

//Donation Button Event Handler:
document.getElementById("donation_btn").addEventListener("click", function(e) {
  showCategoriesOption("donation");
  activeButton("history_btn");
});

//History Button Event Handler:
document.getElementById("history_btn").addEventListener("click", function(e) {
  showCategoriesOption("history");
  activeButton("donation_btn");
});

//Donation Button Event Handlers:
donationMoneyHandlerOne.addEventListener("click", function(e) {
  e.preventDefault();
  let donationMoney = getInputValueById("cd_amount-one");
  let currentMoney = getTextFieldValueById("cdb-one");
  let currentTotal = getTextFieldValueById("total_balance");
  let donationTitle = getTitleById("cd_title-one");

  donationCampaign("cdb-one", "total_balance", "cd_amount-one", donationMoney, currentMoney, currentTotal, donationTitle);
});

donationMoneyHandlerTwo.addEventListener("click", function(e) {
  e.preventDefault();
  let donationMoney = getInputValueById("cd_amount-two");
  let currentMoney = getTextFieldValueById("cdb-two");
  let currentTotal = getTextFieldValueById("total_balance");
  let donationTitle = getTitleById("cd_title-two");

  donationCampaign("cdb-two", "total_balance", "cd_amount-two", donationMoney, currentMoney, currentTotal, donationTitle);
});

donationMoneyHandlerThree.addEventListener("click", function(e) {
  e.preventDefault();
  let donationMoney = getInputValueById("cd_amount-three");
  let currentMoney = getTextFieldValueById("cdb-three");
  let currentTotal = getTextFieldValueById("total_balance");
  let donationTitle = getTitleById("cd_title-three");

  donationCampaign("cdb-three", "total_balance", "cd_amount-three", donationMoney, currentMoney, currentTotal, donationTitle);
});

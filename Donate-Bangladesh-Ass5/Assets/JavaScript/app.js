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

  if(!isNaN(donationMoney) && donationMoney > 0 && donationMoney <= currentTotal) {
    let newCurrentBalance = currentMoney + donationMoney;
    let newCurrentTotal = currentTotal - donationMoney;
    setTextValueById("cdb-one", "total_balance", newCurrentBalance, newCurrentTotal);
    transactionSummary(donationTitle, donationMoney);
    alert("Donation Successful!");
    clearInputFieldById("cd_amount-one");
  } else if(currentTotal === 0) {
    alert("You do not have sufficient balance!");
  } else {
    alert("Invalid Number!");
  }
});

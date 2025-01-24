//Common Function: Donation Campaign
function donationCampaign(id_1, id_2, id_3, d_money, c_money, c_total, d_title) {
  if (!isNaN(d_money) && d_money > 0 && d_money <= c_total) {
    let newC_balance = c_money + d_money;
    let newC_total = c_total - d_money;
    setTextValueById(id_1, id_2, newC_balance, newC_total);
    transactionSummary(d_title, d_money);
    clearInputFieldById(id_3);
    // alert("Donation Successful!");
    my_modal_5.showModal();
  } else if (c_total === 0) {
    clearInputFieldById(id_3);
    alert("You do not have sufficient balance in your account!");
  } else {
    clearInputFieldById(id_3);
    alert("Invalid Number!");
  }
}

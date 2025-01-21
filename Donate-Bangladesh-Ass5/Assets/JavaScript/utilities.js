//Common Function: Donation & History
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

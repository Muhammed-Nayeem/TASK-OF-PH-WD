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

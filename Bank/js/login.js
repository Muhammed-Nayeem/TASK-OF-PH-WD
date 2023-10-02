let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email.length !== 0 || password.length !== 0) {
    if (email === "fathers-bank@shontan.com") {
      if (password === "Shontan") {
        window.location.href = "bank.html";
      } else {
        alert("Your password is not correct!");
      }
    } else {
      alert("Your email is not correct!");
    }
  } else {
    alert("Email and Password field must not be empty!");
  }
});

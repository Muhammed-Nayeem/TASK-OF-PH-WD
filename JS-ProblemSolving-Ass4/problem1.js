/**
 * ? Problem 01: Write a function called calculateTax(), which will calculate 20% tax for monthly income after subtract monthly expenses.
 * ! Conditions: income and expenses should be positive number and income should be greater then or equal to expenses.
 */

function calculateTax(income, expenses) {
  let restIncome = 0;
  let incomeTax = 0;

  if (income >= 0 && expenses >= 0 && income >= expenses) {
    restIncome = income - expenses;
    incomeTax = (restIncome * 20) / 100;
    return incomeTax;
  } else {
    return "Invalid Input";
  }
}

const income_tax = calculateTax(6000, 15000);
console.log("Income Tax : ", income_tax);

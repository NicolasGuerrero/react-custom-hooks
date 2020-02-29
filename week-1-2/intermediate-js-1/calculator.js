window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var amount = document.getElementById("loan-amount");
  var years = document.getElementById("loan-years");
  var rate = document.getElementById("loan-rate");

  amount.value = 100000;
  years.value = 30;
  rate.value = 5;

  var initial = getCurrentUIValues();
  var payment = calculateMonthlyPayment(initial);
  updateMonthly(payment);
}

// Get the current values from the UI
// Update the monthly payment
function update(values) {
  var inputValues = getCurrentUIValues();
  var payment = calculateMonthlyPayment(inputValues);
  updateMonthly(payment);
}

//var payment;
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var i = (values.rate / 100) / 12;
  var n = values.years * 12;
  var payment = (values.amount * i) / (1 - (1 + i) ** (0 - n));
  payment = payment.toFixed(2).toString();
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  var monthlyCalculated = document.getElementById("monthly-payment");
  monthlyCalculated.innerHTML = payment;
}

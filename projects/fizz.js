var form = document.getElementById("formId");
var output = document.getElementById("outputId");

function submitForm(event) {
  // Preventing page refresh
  event.preventDefault();
  const values = event.target.elements[0].value.split(",").map(Number);
  const result = [];

  for (let value of values) {
    if (value % 3 === 0 && value % 5 === 0) {
      result.push("FizzBuzz");
    } else if (value % 3 === 0) {
      result.push("Fizz");
    } else if (value % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(value);
    }
  }

  output.innerText = JSON.stringify(result);
}

// Calling the function during form submission.
form.addEventListener("submit", submitForm);

var form = document.getElementById("formId");
var output = document.getElementById("outputId");

function submitForm(event) {
  //Preventing page refresh
  event.preventDefault();
  const value = event.target.elements[0].value;
  if (value % 3 === 0 && value % 5 === 0) {
    output.innerText = "FizzBuzz";
  } else if (value % 3 === 0) {
    output.innerText = "Fizz";
  } else if (value % 5 === 0) {
    output.innerText = "Buzz";
  } else {
    output.innerText = value.toString();
  }
}

//Calling a function during form submission.
form.addEventListener("submit", submitForm);

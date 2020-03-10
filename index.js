let form = document.getElementById("form");
// !! This is the input that represents a phone number input in the html
let input = document.getElementById("phone_input");
let validatedPhone = document.getElementById("validatedPhone");

// !! listents for the form to submit and than takes whatever content is in that input, which at this point can be anything
form.addEventListener("submit", e => {
  e.preventDefault();
  // gets the data from the input and sets it to a variable
  let phoneBeforeValidation = input.value;
  console.log("phoneBeforeValidation", phoneBeforeValidation);
  //  !! Calls a function from a different file. This is where the return statement matters. The other file doesn't go out and 'do' anything, it just makes sure it has a legitimate value and returns that value or an error
  let phoneAfterValidation = phoneValidation(phoneBeforeValidation);
  console.log("phoneAfterValidation", phoneAfterValidation);
  validatedPhone.innerHTML = phoneAfterValidation;
  console.log(input.textContent);
});

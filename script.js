// let emailInput = document.getElementById("email").value;
// let errorMessage = document.getElementById("error-message");

// function validateEmail() {
//   if (
//     !emailInput.value.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-z]{2,3}$/)
//   ) {
//     errorMessage.innerHTML = "please check your email";
//     return false;
//   }
// }
// console.log(validateEmail());

// Move these lines inside the validateEmail function or use them after the DOM has loaded
function validateEmail() {
  let emailInput = document.getElementById("email").value;
  let errorMessage = document.getElementById("error-message1");

  if (emailInput === "") {
    errorMessage.textContent = "";
    return false; // Stop the function execution here if the input is empty
  }

  if (!emailInput.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-z]{2,3}$/)) {
    errorMessage.innerHTML = "Please check your email";
    emailInput.style.border = "red";
    return false;
  }
  errorMessage.innerHTML = "";
  return true;
}

function emailValidation() {
  let inputBtn = document.getElementById("cta-btn");
  let emailInput2 = document.getElementById("email2").value;
  let errorMessage2 = document.getElementById("error-message2");

  inputBtn.style.top = "30px";

  if (emailInput2 === "") {
    errorMessage2.textContent = "";
    return false;
  }

  if (!emailInput2.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[a-z]{2,3}$/)) {
    errorMessage2.innerHTML = "Please check your email";
    emailInput2.style.border = "red";
    return false;
  }
  errorMessage2.innerHTML = "";
  return true;
}

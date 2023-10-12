const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Login page
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUpForm = document.querySelector("#form");
const SignInForm = document.querySelector("#form-second");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const emailSecond = document.querySelector("#email1");
const password = document.querySelector("#pass");
const passwordSecond = document.querySelector("#pass1");

//show Error
const showError = (input) => {
  const formFlied = input.parentElement;

  formFlied.classList.add("error");
  formFlied.classList.remove("success");
};

// show Success
const showSuccess = (input) => {
  const formFlied = input.parentElement;

  formFlied.classList.remove("error");
  formFlied.classList.add("success");
};

// Remove Success
const removeSuccess = (input) => {
  const formFlied = input.parentElement;
  formFlied.classList.remove("success");
};

// Is Required not skip this one
const isRequired = (value) => (value === "" ? false : true);

// minimum value 3 and maximum value should be 25
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

// value is only string is allowed not any other value
const isString = (value) => {
  const filter = new RegExp("^[a-zA-z]+$");
  return filter.test(value);
};

// Email valid Regular Expression
const isEmailValid = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
};

// password valid Regular Expression
// one letter Capital,one small letter ,special character used , number is used ,minimum 8 digit password  ex: TestCase@#1
const isPasswordValid = (password) => {
  const check = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return check.test(password);
};

// UserName Validation
const userNameCheck = () => {
  let valid = false;
  const min = 3;
  max = 25;
  const nameVal = userName.value.trim();
  if (!isRequired(nameVal)) {
    userName.value = "please enter username";
    showError(userName);
  } else if (!isBetween(nameVal.length, min, max)) {
    userName.value = "min 3 value and max 25 value is allowed";
    showError(userName);
  } else if (!isString(nameVal)) {
    userName.value = "please enter string";
    showError(userName);
  } else {
    showSuccess(userName);
    valid = true;
  }
  return valid;
};

// Email Validation
const emailValidCheck = () => {
  let valid = false;

  const emailVal = email.value.trim();
  if (!isRequired(emailVal)) {
    email.value = "please enter email address";
    showError(email);
  } else if (!isEmailValid(emailVal)) {
    email.value = "please enter valid email";
    showError(email);
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
};

const emailValid = () => {
  let valid = false;

  const emailVal = emailSecond.value.trim();
  if (!isRequired(emailVal)) {
    emailSecond.value = "please enter email address";
    showError(emailSecond);
  } else if (!isEmailValid(emailVal)) {
    emailSecond.value = "please enter valid email";
    showError(emailSecond);
  } else {
    showSuccess(emailSecond);
    valid = true;
  }
  return valid;
};

//Password Validation
const passwordCheck = () => {
  let valid = false;

  const passVal = password.value.trim();
  if (!isRequired(passVal)) {
    password.value = "please enter password";
    showError(password);
  } else if (!isPasswordValid(passVal)) {
    password.value = "please enter valid password";
    showError(password);
  } else {
    showSuccess(password);
    valid = true;
  }
  return valid;
};

const passwordCheckSecond = () => {
  let valid = false;

  const passVal = passwordSecond.value.trim();
  if (!isRequired(passVal)) {
    passwordSecond.value = "please enter password";
    showError(passwordSecond);
  } else if (!isPasswordValid(passVal)) {
    passwordSecond.value = "please enter valid password";
    showError(passwordSecond);
  } else {
    showSuccess(passwordSecond);
    valid = true;
  }
  return valid;
};

// Sign Up form validation
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameValid = userNameCheck();
  let emailValid = emailValidCheck();
  let passwordValid = passwordCheck();

  if (nameValid && emailValid && passwordValid) {
    userName.value = "";
    email.value = "";
    password.value = "";
    removeSuccess(userName);
    removeSuccess(email);
    removeSuccess(password);
    window.location.href = "index.html";
  } else {
    alert(`Form Is Not Valid Try Again`);
  }
});

// Sign In form validation
SignInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValidS = emailValid();
  let passwordValidS = passwordCheckSecond();

  if (emailValidS && passwordValidS) {
    emailSecond.value = "";
    passwordSecond.value = "";
    removeSuccess(emailSecond);
    removeSuccess(passwordSecond);
    window.location.href = "index.html";
  } else {
    alert("Form Is Not Valid Try Again");
  }
});

const darkModeButton = document.getElementById("darkModeBtn");
const lightModeCss = document.getElementById("lightModeCss");
const darkModeCss = document.getElementById("darkModeCss");

darkModeButton.addEventListener("click", () => {
  lightModeCss.disabled = !lightModeCss.disabled;
  darkModeCss.disabled = !darkModeCss.disabled;
});

const darkModeBtn = document.getElementById("darkModeBtn");
const buttonImage = document.getElementById("button");

darkModeBtn.addEventListener("click", () => {
  const imageName = buttonImage.src.split("/").pop();

  if (imageName.includes("sun-light-mode")) {
    buttonImage.src = buttonImage.src.replace(
      "sun-light-mode",
      "moon-dark-mode"
    );
  } else {
    buttonImage.src = buttonImage.src.replace(
      "moon-dark-mode",
      "sun-light-mode"
    );
  }
});

const skillImages = document.querySelectorAll(
  ".skill__image-div img , .hobbies__image-div img , .formacao__img-div img , .experiencia__link-img img , .redes img"
);

darkModeButton.addEventListener("click", () => {
  if (darkModeButton.classList.contains("active")) {
    darkModeButton.classList.remove("active");
    skillImages.forEach((image) => {
      image.src = image.src.replace("-dark-mode", "-light-mode");
    });
  } else {
    darkModeButton.classList.add("active");
    skillImages.forEach((image) => {
      image.src = image.src.replace("-light-mode", "-dark-mode");
    });
  }
});

//formulario
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

nameInput.addEventListener("blur", function () {
  validateName();
});

function validateName() {
  const value = nameInput.value;
  let errorMessage = "";

  if (value.trim() === "") {
    errorMessage = "O nome não pode estar em branco.";
  } else if (value.length > 50) {
    errorMessage = "O nome deve ter no máximo 50 caracteres.";
  }

  if (errorMessage !== "") {
    nameError.textContent = errorMessage;
    nameInput.classList.add("invalid");
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
  }
}

//email

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("blur", function () {
  validateEmail();
});

function validateEmail() {
  const value = emailInput.value;
  let errorMessage = "";

  if (value.trim() === "") {
    errorMessage = "O email não pode estar em branco.";
  } else if (!isValidEmail(value)) {
    errorMessage = "Digite um email válido.";
  }

  if (errorMessage !== "") {
    emailError.textContent = errorMessage;
    emailInput.classList.add("invalid");
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
  }
}

function isValidEmail(email) {
  // Regex para verificar o formato de email
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

//assunto

const assuntoInput = document.getElementById("assunto");
const assuntoError = document.getElementById("assuntoError");

assuntoInput.addEventListener("blur", function () {
  validateAssunto();
});

function validateAssunto() {
  const value = assuntoInput.value;
  let errorMessage = "";

  if (value.trim() === "") {
    errorMessage = "O assunto não pode estar em branco.";
  } else if (value.length > 50) {
    errorMessage = "O assunto deve ter no máximo 50 caracteres.";
  }

  if (errorMessage !== "") {
    assuntoError.textContent = errorMessage;
    assuntoInput.classList.add("invalid");
  } else {
    assuntoError.textContent = "";
    assuntoInput.classList.remove("invalid");
  }
}

//mensagem

const mensagemInput = document.getElementById("mensagem");
const mensagemError = document.getElementById("mensagemError");

mensagemInput.addEventListener("blur", function () {
  validateMensagem();
});

function validateMensagem() {
  const value = mensagemInput.value;
  let errorMessage = "";

  if (value.trim() === "") {
    errorMessage = "A mensagem não pode estar em branco.";
  } else if (value.length > 300) {
    errorMessage = "A mensagem deve ter no máximo 300 caracteres.";
  }

  if (errorMessage !== "") {
    mensagemError.textContent = errorMessage;
    mensagemInput.classList.add("invalid");
  } else {
    mensagemError.textContent = "";
    mensagemInput.classList.remove("invalid");
  }
}

//button

const submitButton = document.getElementById("submitButton");
const formInputs = document.querySelectorAll("input, textarea");
formInputs.forEach(input => {
  input.addEventListener("input", validateForm);
});

function validateForm() {
  let todosCamposValido = true;

  formInputs.forEach(input => {
    if (input.value.trim() === "" || !input.checkValidity()) {
      todosCamposValido = false;
    }
  });

  if (todosCamposValido) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

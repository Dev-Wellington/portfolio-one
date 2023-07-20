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
  const imageName = buttonImage.src.split('/').pop(); 

  if (imageName.includes("sun-light-mode")) {
    buttonImage.src = buttonImage.src.replace("sun-light-mode", "moon-dark-mode");
  } else {
    buttonImage.src = buttonImage.src.replace("moon-dark-mode", "sun-light-mode");
  }
});



const skillImages = document.querySelectorAll(".skill__image-div img , .hobbies__image-div img , .formacao__img-div img , .experiencia__link-img img , .redes img");

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


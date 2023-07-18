const darkModeButton = document.getElementById("darkModeBtn");
const lightModeCss = document.getElementById("lightModeCss");
const darkModeCss = document.getElementById("darkModeCss");

darkModeButton.addEventListener("click", () => {
  lightModeCss.disabled = !lightModeCss.disabled;
  darkModeCss.disabled = !darkModeCss.disabled;
});

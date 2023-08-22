const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector("nav");
const defaultTheme = document.getElementById("default-theme");
const whiteTheme = document.getElementById("white-theme");
const blackTheme = document.getElementById("black-theme");
const backgroundContainer = document.querySelector(".background-container");

// Function to set the theme class on the body element
function setTheme(theme) {
  document.body.className = `stackedit ${theme}-theme`;
  localStorage.setItem("theme", theme); // Store the selected theme in local storage

  // Update the background image based on the selected theme
  if (theme === "default") {
    backgroundContainer.style.backgroundImage = "url('https://media.discordapp.net/attachments/620257660121514005/1135405967056588830/IMG_3949.jpg?width=1138&height=663')";
  } else {
    backgroundContainer.style.backgroundImage = "none";
  }
}

hamburger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Hide the navigation bar when a link is clicked
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("show");
  });
});

// Handle theme switch change
defaultTheme.addEventListener("change", () => {
  setTheme("default");
});

whiteTheme.addEventListener("change", () => {
  setTheme("white");
});

blackTheme.addEventListener("change", () => {
  setTheme("black");
});

// Retrieve the theme preference from local storage on page load
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setTheme(storedTheme);
}

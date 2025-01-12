function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// this is default code for lightmode  mode  and darkmode mode

// document.getElementById("theme").addEventListener("click", function () {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches)
//     document.body.classList.toggle("light-mode");
//   else document.body.classList.toggle("dark-mode");
// });

// this is code for lightmode  mode  and darkmode mode with local storage create this github copilot

window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

document.getElementById("theme").addEventListener("click", function () {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  } else {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme");
    }
  }
});







// for audio player save current time in local storage   

document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("myAudio");

  // Load the saved time from local storage
  const savedTime = localStorage.getItem("audioCurrentTime");
  if (savedTime) {
    audio.currentTime = savedTime;
  }

  // Save the current time to local storage whenever it changes
  audio.addEventListener("timeupdate", function() {
    localStorage.setItem("audioCurrentTime", audio.currentTime);
  });
});
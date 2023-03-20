//jquery for toggle dropdown menus
$(document).ready(function () {
  //toggle sub-menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
  });

  //toggle more-menus
  $(".more-btn").click(function () {
    $(this).next(".more-menu").slideToggle();
  });
});

//javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

//javascript for the navigation bar effects on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 700px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// End Scroll Animation

// Change theme darkmode or lightmode
let root = document.querySelector(":root");
let lightmode = document.getElementById("light-mode");
let darkmode = document.getElementById("dark-mode");

// LightMode button color settings
function LightMode() {
  root.style.setProperty("--MenuBackground","white");
  root.style.setProperty("--SectionBackground","white");

  root.style.setProperty("--FontColor","black");
  root.style.setProperty("--BorderColor","black");

  root.style.setProperty("--FontHoverColor","#00fbff");
  root.style.setProperty("--BorderHoverColor","#00fbff");

  root.style.setProperty("--scrollbarTrack","#fff5f5");
  root.style.setProperty("--scrollbarThumb","#00fbff");

  lightmode.style.display="none";
  darkmode.style.display="block";
}

// DarkMode button color settings
function DarkMode() {
  root.style.setProperty("--MenuBackground","#23252B");
  root.style.setProperty("--SectionBackground","#23252B");

  root.style.setProperty("--FontColor","#fff");
  root.style.setProperty("--BorderColor","#fff");

  root.style.setProperty("--FontHoverColor","#00fbff");
  root.style.setProperty("--BorderHoverColor","#00fbff");

  root.style.setProperty("--scrollbarTrack","#181a1d");
  root.style.setProperty("--scrollbarThumb","#00fbff");

  darkmode.style.display="none";
  lightmode.style.display="block";
}

// End change theme


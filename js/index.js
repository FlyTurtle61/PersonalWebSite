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

if (menuBtn && menu && closeBtn) {
  menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });
}

//javascript for the navigation bar effects on scroll + scroll-to-top button
let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {
  // Sticky header
  var header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }

  // Show/hide scroll-to-top button
  if (mybutton) {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      // Use CSS class for display instead of inline styles for better transitions
      mybutton.classList.add("active"); 
    } else {
      mybutton.classList.remove("active");
    }
  }
});

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  if (!root || !lightmode || !darkmode) return;
  root.style.setProperty("--MenuBackground","white");
  root.style.setProperty("--SectionBackground","white");

  root.style.setProperty("--FontColor","black");
  root.style.setProperty("--BorderColor","black");

  root.style.setProperty("--FontHoverColor","#00d4ff");
  root.style.setProperty("--BorderHoverColor","#00d4ff");

  root.style.setProperty("--scrollbarTrack","#fff5f5");
  root.style.setProperty("--scrollbarThumb","#00d4ff");

  lightmode.style.display="none";
  darkmode.style.display="block";
}

// DarkMode button color settings
function DarkMode() {
  if (!root || !lightmode || !darkmode) return;
  root.style.setProperty("--MenuBackground","#1a1c22");
  root.style.setProperty("--SectionBackground","#1e2028");

  root.style.setProperty("--FontColor","#e8e8e8");
  root.style.setProperty("--BorderColor","rgba(255, 255, 255, 0.15)");

  root.style.setProperty("--FontHoverColor","#00d4ff");
  root.style.setProperty("--BorderHoverColor","#00d4ff");

  root.style.setProperty("--scrollbarTrack","#111318");
  root.style.setProperty("--scrollbarThumb","#00d4ff");

  darkmode.style.display="none";
  lightmode.style.display="block";
}
// End change theme

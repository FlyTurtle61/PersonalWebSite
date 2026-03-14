window.addEventListener("load", () => {
  hideLoader();
});

// Fallback: If resources (like images or external fonts) take too long, hide loader after 1.5 seconds anyway
setTimeout(() => {
  hideLoader();
}, 1500);

function hideLoader() {
  const loader = document.querySelector(".loader");
  if (loader && !loader.classList.contains("loader-hidden")) {
    loader.classList.add("loader-hidden");
    
    // Listen for the CSS transition to finish before removing it from DOM
    loader.addEventListener("transitionend", () => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, { once: true });
  }
}

// js/script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Basic predictive scrolling logic
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      // For demonstration: Log scroll direction (expand as needed)
      console.log("User is scrolling " + direction);
    });
  
    // Global error handling for enhanced protection
    window.addEventListener("error", (event) => {
      console.error("An error occurred:", event.error);
      // Optionally, show a user-friendly message or send error reports.
    });
  });
  
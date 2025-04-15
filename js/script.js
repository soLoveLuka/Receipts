document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
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
  
    // Basic predictive scrolling (example)
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? 'down' : 'up';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      console.log("Scrolling " + direction);
    });
  
    // Global error handling for protection
    window.addEventListener("error", (event) => {
      console.error("An error occurred:", event.error);
    });
  
    /* ----------------------------
       Carousel Auto-Scroll Logic
    ------------------------------- */
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      let currentIndex = 0;
      // Get all carousel items
      const items = document.querySelectorAll('.carousel-item');
      const totalItems = items.length;
      
      // Calculate the width for one item including margin (assume each item is 20% wide)
      // We use getBoundingClientRect() to determine the actual width
      const firstItem = items[0];
      const itemWidth = firstItem.getBoundingClientRect().width + 20; // adjust if margin changes
  
      function autoScrollCarousel() {
        // Increase index and wrap it around to create an infinite feel
        currentIndex = (currentIndex + 1) % totalItems;
        // Calculate how much to move the carousel horizontally
        const translateX = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
      }
      
      // Set interval to change the carousel every 7000ms (7 seconds)
      setInterval(autoScrollCarousel, 7000);
    }
  });
  

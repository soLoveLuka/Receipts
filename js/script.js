document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------
     Smooth Scrolling for Navigation Links
  ---------------------------------------- */
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

  /* ---------------------------------------
     Predictive Scrolling (Logging Direction)
  ---------------------------------------- */
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const direction = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    // Optionally, handle UI changes based on scrolling here
    // console.log("Scrolling " + direction);
  });

  /* ---------------------------------------
     Global Error Handling for Robustness
  ---------------------------------------- */
  window.addEventListener("error", (event) => {
    console.error("An error occurred:", event.error);
  });

  /* ---------------------------------------
     Infinite Carousel Auto-Scroll Logic
  ---------------------------------------- */
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    // Determine item width dynamically (assumes uniform width plus margin)
    const firstItem = items[0];
    const itemStyle = window.getComputedStyle(firstItem);
    const itemWidth = firstItem.getBoundingClientRect().width +
                      parseInt(itemStyle.marginRight) +
                      parseInt(itemStyle.marginLeft);

    function autoScrollCarousel() {
      currentIndex = (currentIndex + 1) % totalItems;
      const translateX = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
    }
    
    setInterval(autoScrollCarousel, 7000); // 7-second interval for auto-scroll
  }

  /* ---------------------------------------
     Intersection Observer for Section Animations
  ---------------------------------------- */
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };
  
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Remove observer if you only want the animation once
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  const animatedElements = document.querySelectorAll(".animate");
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

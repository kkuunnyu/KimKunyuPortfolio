

document.addEventListener("DOMContentLoaded", function() {
  const balloons = document.querySelectorAll(".balloon");
  const aboutSection = document.querySelector(".about-section");
  const portfolioSection = document.querySelector(".portfolio-section");
  const centerImage = document.querySelector(".center-image");

  let lastScrollTop = 0; 
  let scrollOffset = 0;  

  const movementRanges = {
      balloon1: 5,
      balloon2: 4,
      balloon3: 3,
      balloon4: 4,
      balloon5: 6,
      balloon6: 9,
      balloon7: 5,
      balloon8: 5,
      balloon9: 5,
      balloon10: 3,
      balloon11: 5,
      balloon12: 7,
      balloon13: 3,
      balloon14: 5,
      balloon15: 6,
      balloon16: 7,
      balloon17: 3,
      balloon18: 4,
      balloon19: 3,
      balloon20: 5,
      balloon21: 3,
      balloon22: 2,
      balloon23: 4,
  };

  function handleScroll() {
    const scrollTop = window.scrollY;
    const delta = scrollTop - lastScrollTop; 

    scrollOffset += delta;

    balloons.forEach((balloon) => {
        const balloonId = balloon.id;
        const rangeMultiplier = movementRanges[balloonId];
        const balloonMovement = scrollOffset * rangeMultiplier;
        balloon.style.transform = `translateY(-${balloonMovement}px)`;
    });

    if (scrollTop + window.innerHeight > aboutSection.offsetTop) {
        aboutSection.classList.add("in-view");
    } else {
        aboutSection.classList.remove("in-view");
    }

    if (scrollTop + window.innerHeight > portfolioSection.offsetTop) {
      portfolioSection.classList.add("in-view");
    } else {
      portfolioSection.classList.remove("in-view");
    }

    lastScrollTop = scrollTop; 
  }

  function fadeInImage() {
    const windowHeight = window.innerHeight;
    const imageTop = centerImage.getBoundingClientRect().top;

    if (imageTop <= windowHeight) {
      centerImage.classList.add("fade-in");
    }
  }

  window.addEventListener("scroll", function() {
    handleScroll();
    fadeInImage();
  });
  
  handleScroll();
  fadeInImage();
});


document.addEventListener("DOMContentLoaded", function() {
  const aboutImage = document.querySelector(".about-image");
  const aboutText = document.querySelector(".about-text");
  const extraAboutText = document.querySelector("#extra-about .about-text"); 

  function checkInView() {
    const windowHeight = window.innerHeight;
    const imageTop = aboutImage.getBoundingClientRect().top;
    const textTop = aboutText.getBoundingClientRect().top;
    const extraTextTop = extraAboutText.getBoundingClientRect().top; 

    if (imageTop <= windowHeight * 0.8) {
      aboutImage.classList.add("in-view");
      setTimeout(() => {
        if (textTop <= windowHeight * 0.8) {
          aboutText.classList.add("in-view");
        }
      }, 500);
    } else {
      aboutImage.classList.remove("in-view");
      aboutText.classList.remove("in-view");
    }

    if (extraTextTop <= windowHeight * 1.2) {
      extraAboutText.classList.add("in-view");
    } else {
      extraAboutText.classList.remove("in-view");
    }
  }

  window.addEventListener("scroll", checkInView);
  checkInView();
});



document.addEventListener("DOMContentLoaded", function() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const portfolioSection = document.querySelector(".portfolio-section");

  function checkPortfolioInView() {
    const windowHeight = window.innerHeight;
    const sectionTop = portfolioSection.getBoundingClientRect().top;

    if (sectionTop <= windowHeight * 0.8) { 
      let delay = 0;
      portfolioItems.forEach((item, index) => {
        if (index % 2 === 0 && index < portfolioItems.length) {
          setTimeout(() => {
            item.classList.add("in-view");
            if (index + 1 < portfolioItems.length) {
              portfolioItems[index + 1].classList.add("in-view");
            }
          }, delay);
          delay += 500; 
        }
      });
    } else {
      portfolioItems.forEach(item => item.classList.remove("in-view"));
    }
  }

  window.addEventListener("scroll", checkPortfolioInView);
  checkPortfolioInView(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const movingTextContainers = document.querySelectorAll('.moving-text-container');
  const aboutSection = document.getElementById('about');
  const extraAboutSection = document.getElementById('extra-about');

  function handleScroll() {
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const extraAboutSectionTop = extraAboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    movingTextContainers.forEach(container => {
      container.style.opacity = '0'; 
    });

    if (aboutSectionTop <= windowHeight * 0.5 && aboutSectionTop >= -windowHeight * 0.5) {
      aboutSection.querySelector('.moving-text-container').style.opacity = '0.1';
    }

    if (extraAboutSectionTop <= windowHeight * 0.5 && extraAboutSectionTop >= -windowHeight * 0.5) {
      extraAboutSection.querySelector('.moving-text-container').style.opacity = '0.1';
    }
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});


document.addEventListener('scroll', function() {
  const contactSection = document.getElementById('contact');
  const contactPosition = contactSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (contactPosition < windowHeight) {
    contactSection.classList.add('visible');
  }
});

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});

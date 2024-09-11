document.addEventListener("DOMContentLoaded", function() {
  const balloons = document.querySelectorAll(".balloon");
  const aboutSection = document.querySelector(".about-section");
  const portfolioSection = document.querySelector(".portfolio-section");
  const centerImage = document.querySelector(".center-image");

  let lastScrollTop = 0;  // 마지막 스크롤 위치 저장
  let scrollOffset = 0;   // 풍선 이동 범위를 누적할 변수

  // 각 풍선에 대해 고유한 상하 이동 범위 설정 (픽셀 단위)
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

  // 풍선 이동 및 섹션 애니메이션 체크
  function handleScroll() {
    const scrollTop = window.scrollY;
    const delta = scrollTop - lastScrollTop;  // 이전 스크롤 위치와 현재 스크롤 위치 차이 계산

    // 스크롤에 따라 풍선 이동 범위를 누적
    scrollOffset += delta;

    balloons.forEach((balloon) => {
        const balloonId = balloon.id;
        const rangeMultiplier = movementRanges[balloonId];
        const balloonMovement = scrollOffset * rangeMultiplier;
        balloon.style.transform = `translateY(-${balloonMovement}px)`;
    });

    // 소개글 섹션의 나타나는 효과
    if (scrollTop + window.innerHeight > aboutSection.offsetTop) {
        aboutSection.classList.add("in-view");
    } else {
        aboutSection.classList.remove("in-view");
    }

    // 포트폴리오 섹션의 나타나는 효과
    if (scrollTop + window.innerHeight > portfolioSection.offsetTop) {
      portfolioSection.classList.add("in-view");
    } else {
      portfolioSection.classList.remove("in-view");
    }

    lastScrollTop = scrollTop;  // 현재 스크롤 위치를 업데이트
  }

  // 이미지 페이드인 트리거 함수
  function fadeInImage() {
    const windowHeight = window.innerHeight;
    const imageTop = centerImage.getBoundingClientRect().top;

    // 이미지가 화면에 나타날 때 애니메이션 추가
    if (imageTop <= windowHeight) {
      centerImage.classList.add("fade-in");
    }
  }

  // 스크롤 시 애니메이션 체크
  window.addEventListener("scroll", function() {
    handleScroll();
    fadeInImage();
  });
  
  // 페이지 로드 후 첫 스크롤에도 효과 적용
  handleScroll();
  fadeInImage();
});


document.addEventListener("DOMContentLoaded", function() {
  const aboutImage = document.querySelector(".about-image");
  const aboutText = document.querySelector(".about-text");
  const extraAboutText = document.querySelector("#extra-about .about-text");  // 새 섹션 선택

  function checkInView() {
    const windowHeight = window.innerHeight;
    const imageTop = aboutImage.getBoundingClientRect().top;
    const textTop = aboutText.getBoundingClientRect().top;
    const extraTextTop = extraAboutText.getBoundingClientRect().top; // 새 섹션의 위치

    // 기존 소개글 섹션 애니메이션
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

    // 추가 소개글 섹션 애니메이션
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

    // 포트폴리오 섹션이 화면에 보일 때 이미지 애니메이션 추가
    if (sectionTop <= windowHeight * 0.8) { // 화면의 80% 지점에 섹션이 보이면
      let delay = 0;
      portfolioItems.forEach((item, index) => {
        if (index % 2 === 0 && index < portfolioItems.length) {
          setTimeout(() => {
            item.classList.add("in-view");
            // 두 번째 이미지도 동시에 보이도록 설정
            if (index + 1 < portfolioItems.length) {
              portfolioItems[index + 1].classList.add("in-view");
            }
          }, delay);
          delay += 500; // 두 개씩 나타나도록 딜레이 설정
        }
      });
    } else {
      portfolioItems.forEach(item => item.classList.remove("in-view"));
    }
  }

  window.addEventListener("scroll", checkPortfolioInView);
  checkPortfolioInView(); // 페이지 로드 시 초기 체크
});

document.addEventListener("DOMContentLoaded", function() {
  const movingTextContainers = document.querySelectorAll('.moving-text-container');
  const aboutSection = document.getElementById('about');
  const extraAboutSection = document.getElementById('extra-about');

  // 스크롤 시 각 섹션에 도달하면 전광판 텍스트 보이기
  function handleScroll() {
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const extraAboutSectionTop = extraAboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    movingTextContainers.forEach(container => {
      container.style.opacity = '0'; // 모든 전광판 텍스트를 기본적으로 숨김
    });

    // 소개글 섹션에 도달하면 전광판 텍스트 보이기
    if (aboutSectionTop <= windowHeight * 0.5 && aboutSectionTop >= -windowHeight * 0.5) {
      aboutSection.querySelector('.moving-text-container').style.opacity = '0.1';
    }

    // 추가 소개글 섹션에 도달하면 전광판 텍스트 보이기
    if (extraAboutSectionTop <= windowHeight * 0.5 && extraAboutSectionTop >= -windowHeight * 0.5) {
      extraAboutSection.querySelector('.moving-text-container').style.opacity = '0.1';
    }
  }

  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', handleScroll);

  // 페이지 로드 시 초기 체크
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

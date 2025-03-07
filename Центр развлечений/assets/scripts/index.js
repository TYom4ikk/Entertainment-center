const header = document.querySelector('.header-content');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.muted = true;
});

// SLIDER
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;
let isAnimating = false;

function showPreviousSlide() {
  if (isAnimating) return;

  isAnimating = true;
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  if (isAnimating) return;

  isAnimating = true;
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  const translateX = -slideIndex * 100 + '%';
  slider.style.transform = `translateX(${translateX})`;
  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

updateSlider();
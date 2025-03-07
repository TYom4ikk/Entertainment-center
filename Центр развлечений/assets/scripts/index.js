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
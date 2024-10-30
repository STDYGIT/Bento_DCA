document.querySelectorAll('.vid').forEach(box => {
    const video = box.querySelector('video');
    const content = box.querySelector('.content');
    box.addEventListener('mouseenter', () => {
        video.play();
        content.style.opacity = 0; // Fade out content on hover
    });

    video.addEventListener('ended', () => {
        video.pause();
        video.currentTime = 0; // Reset to the beginning
        content.style.opacity = 1; // Reset opacity when video ends
    });

});
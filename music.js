// Music Control
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

// Auto play music when page loads
window.addEventListener('load', () => {
    // Try to auto-play with sound
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '🎵';
            })
            .catch(error => {
                // Auto-play failed, user needs to click
                console.log('Auto-play blocked:', error);
                musicBtn.classList.remove('playing');
                musicBtn.innerHTML = '🔇';
            });
    }
});

// Music button click handler
musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '🎵';
    } else {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '🔇';
    }
});

// Update button state when music ends (shouldn't happen with loop, but just in case)
bgMusic.addEventListener('ended', () => {
    bgMusic.currentTime = 0;
    bgMusic.play();
});

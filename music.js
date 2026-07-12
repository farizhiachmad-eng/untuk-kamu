// Safer music control: muted autoplay + unmute on first user gesture
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

if (bgMusic) {
  // Try muted autoplay on load (most browsers allow muted autoplay)
  window.addEventListener('load', async () => {
    try {
      bgMusic.muted = true; // muted so autoplay is more likely to be allowed
      await bgMusic.play();

      if (musicBtn) {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '🔈'; // indicate muted playing
      }
    } catch (err) {
      console.warn('Muted autoplay failed or blocked:', err);
      if (musicBtn) {
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '🔇';
      }
    }
  });

  // On the first user gesture (click/touch), unmute and ensure audio is playing
  const handleFirstGesture = async () => {
    try {
      if (bgMusic.paused) {
        await bgMusic.play();
      }
      bgMusic.muted = false; // unmute after user interaction

      if (musicBtn) {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '🎵';
      }
    } catch (e) {
      console.warn('Play/unmute on gesture failed:', e);
    }

    window.removeEventListener('click', handleFirstGesture);
    window.removeEventListener('touchstart', handleFirstGesture);
  };

  window.addEventListener('click', handleFirstGesture, { once: true });
  window.addEventListener('touchstart', handleFirstGesture, { once: true });

  // Toggle play/pause via music button
  if (musicBtn) {
    musicBtn.addEventListener('click', async () =&gt; {
      try {
        if (bgMusic.paused) {
          await bgMusic.play();
          bgMusic.muted = false; // unmute when user explicitly starts playback
          musicBtn.classList.add('playing');
          musicBtn.innerHTML = '🎵';
        } else {
          bgMusic.pause();
          musicBtn.classList.remove('playing');
          musicBtn.innerHTML = '🔇';
        }
      } catch (err) {
        console.warn('Music button play failed:', err);
      }
    });
  }

  // keep looping
  bgMusic.addEventListener('ended', () =&gt; {
    bgMusic.currentTime = 0;
    bgMusic.play();
  });
}

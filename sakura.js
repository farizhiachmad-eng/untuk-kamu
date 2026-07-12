// Generate Sakura Petals
function createSakura() {
    const container = document.getElementById('sakura-container');
    const sakuraCount = 50; // Number of sakura petals
    
    for (let i = 0; i < sakuraCount; i++) {
        const sakura = document.createElement('div');
        sakura.className = `sakura sakura-fall speed-${Math.floor(Math.random() * 5) + 1} petal-${Math.floor(Math.random() * 4) + 1}`;
        
        // Random horizontal position
        const randomX = Math.random() * window.innerWidth;
        sakura.style.left = randomX + 'px';
        
        // Random delay to stagger animation
        const randomDelay = Math.random() * 5 + 's';
        sakura.style.animationDelay = randomDelay;
        
        // Random size variation (18-25px)
        const size = Math.random() * 7 + 18;
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';
        
        container.appendChild(sakura);
    }
    
    // Create new sakura petals continuously
    setInterval(() => {
        const sakura = document.createElement('div');
        sakura.className = `sakura sakura-fall speed-${Math.floor(Math.random() * 5) + 1} petal-${Math.floor(Math.random() * 4) + 1}`;
        
        const randomX = Math.random() * window.innerWidth;
        sakura.style.left = randomX + 'px';
        sakura.style.top = '-30px';
        
        const size = Math.random() * 7 + 18;
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';
        
        container.appendChild(sakura);
        
        // Remove sakura after animation completes
        setTimeout(() => {
            sakura.remove();
        }, 15000);
    }, 300); // Create new sakura every 300ms
}

// Initialize sakura when page loads
window.addEventListener('load', createSakura);

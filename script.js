document.addEventListener('DOMContentLoaded', function() {
  // Welcome overlay
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const welcomeButton = document.getElementById('welcome-button');
  
  welcomeButton.addEventListener('click', function() {
    welcomeOverlay.style.opacity = '0';
    setTimeout(() => {
      welcomeOverlay.style.display = 'none';
      // Start animations after welcome screen
      createFloatingElements();
      // Start counting days
      countDays();
    }, 500);
  });
  
  // Love button
  const loveButton = document.getElementById('love-button');
  const loveMessage = document.getElementById('love-message');
  
  loveButton.addEventListener('click', function() {
    loveMessage.classList.toggle('show');
    
    if (loveMessage.classList.contains('show')) {
      // Add heart burst animation when showing message
      createHeartBurst();
    }
  });
  
  // Music player
  const playButton = document.getElementById('play-button');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const loveMusic = document.getElementById('love-music');
  
  playButton.addEventListener('click', function() {
    if (loveMusic.paused) {
      loveMusic.play();
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'inline';
    } else {
      loveMusic.pause();
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
    }
  });
  
  // Count days together (example start date)
  function countDays() {
    const startDate = new Date('2023-01-01'); // Change this to your actual start date
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - startDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    const daysCount = document.getElementById('days-count');
    
    // Animate counting
    let count = 0;
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const increment = daysDiff / (duration / interval);
    
    const timer = setInterval(() => {
      count += increment;
      if (count >= daysDiff) {
        count = daysDiff;
        clearInterval(timer);
      }
      daysCount.textContent = Math.floor(count);
    }, interval);
  }
  
  // Create floating elements
  function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    
    // Create hearts
    createElements(container, '❤️', 20);
    
    // Create flowers
    createElements(container, '🌸', 15);
    
    // Create butterflies
    createElements(container, '🦋', 10);
  }
  
  function createElements(container, emoji, count) {
    for (let i = 0; i < count; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.textContent = emoji;
      
      // Random position
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = 10 + Math.random() * 20;
      element.style.fontSize = `${size}px`;
      
      // Random opacity
      element.style.opacity = 0.1 + Math.random() * 0.7;
      
      // Random animation duration
      const duration = 15 + Math.random() * 15;
      element.style.animationDuration = `${duration}s`;
      
      // Random animation delay
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      // Random movement path
      const x1 = Math.random() * 100 - 50;
      const y1 = Math.random() * 100 - 50;
      const x2 = Math.random() * 100 - 50;
      const y2 = Math.random() * 100 - 50;
      const x3 = Math.random() * 100 - 50;
      const y3 = Math.random() * 100 - 50;
      
      const r1 = Math.random() * 90;
      const r2 = Math.random() * 180;
      const r3 = Math.random() * 270;
      
      element.style.setProperty('--x1', `${x1}px`);
      element.style.setProperty('--y1', `${y1}px`);
      element.style.setProperty('--x2', `${x2}px`);
      element.style.setProperty('--y2', `${y2}px`);
      element.style.setProperty('--x3', `${x3}px`);
      element.style.setProperty('--y3', `${y3}px`);
      
      element.style.setProperty('--r1', `${r1}deg`);
      element.style.setProperty('--r2', `${r2}deg`);
      element.style.setProperty('--r3', `${r3}deg`);
      
      container.appendChild(element);
    }
  }
  
  // Create heart burst animation
  function createHeartBurst() {
    const burstContainer = document.createElement('div');
    burstContainer.className = 'heart-burst';
    document.body.appendChild(burstContainer);
    
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement('div');
      heart.className = 'burst-heart';
      heart.textContent = '❤️';
      
      // Initial position at center
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.transform = 'translate(-50%, -50%)';
      
      // Random size
      const size = 10 + Math.random() * 20;
      heart.style.fontSize = `${size}px`;
      
      burstContainer.appendChild(heart);
      
      // Animate to random position
      setTimeout(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 300;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        heart.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        heart.style.opacity = '0';
      }, 10);
    }
    
    // Remove burst container after animation
    setTimeout(() => {
      document.body.removeChild(burstContainer);
    }, 2000);
  }
});

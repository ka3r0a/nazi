document.addEventListener('DOMContentLoaded', function() {
  // Clock functionality
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Update clock every second
  updateClock();
  setInterval(updateClock, 1000);
  
  // Message button functionality
  const messageButton = document.getElementById('message-button');
  const loveMessage = document.getElementById('love-message');
  
  messageButton.addEventListener('click', function() {
    if (loveMessage.style.display === 'block') {
      loveMessage.style.display = 'none';
    } else {
      loveMessage.style.display = 'block';
    }
  });
  
  // Hide name message after 5 seconds
  const nameMessage = document.getElementById('name-message');
  setTimeout(function() {
    nameMessage.style.animation = 'fadeOut 0.5s ease-out forwards';
    setTimeout(() => {
      nameMessage.style.display = 'none';
    }, 500);
  }, 5000);
  
  // Create pulsing hearts around the clock
  const clockHearts = document.getElementById('clock-hearts');
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = Math.cos(angle) * 120;
    const y = Math.sin(angle) * 120;
    
    const heart = document.createElement('div');
    heart.className = 'clock-heart';
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffb3c1" stroke="#ffb3c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;
    heart.style.left = `calc(50% + ${x}px)`;
    heart.style.top = `calc(50% + ${y}px)`;
    heart.style.animationDelay = `${i * 0.25}s`;
    
    clockHearts.appendChild(heart);
  }
  
  // Create floating hearts
  const floatingHearts = document.getElementById('floating-hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    // Randomize heart size and color
    const size = 16 + Math.floor(Math.random() * 12);
    const colorNum = 300 + Math.floor(Math.random() * 3) * 100;
    
    heart.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="#ff${colorNum.toString(16)}" stroke="#ff${colorNum.toString(16)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    `;
    
    // Randomize position and animation
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.opacity = 0.2 + Math.random() * 0.8;
    heart.style.animationDuration = `${10 + Math.random() * 20}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    
    floatingHearts.appendChild(heart);
  }
  
  // Create large background hearts
  const largeHearts = document.getElementById('large-hearts');
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'large-heart';
    heart.textContent = '❤️';
    
    // Randomize position and animation
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    
    largeHearts.appendChild(heart);
  }
  
  // Create falling rose petals
  const rosePetals = document.getElementById('rose-petals');
  for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.className = 'rose-petal';
    petal.textContent = '🌹';
    
    // Randomize position and animation
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${10 + Math.random() * 20}px`;
    petal.style.animationDuration = `${15 + Math.random() * 20}s`;
    petal.style.animationDelay = `${Math.random() * 10}s`;
    
    rosePetals.appendChild(petal);
  }
  
  // Animate bottom dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.style.animation = `float 1.5s ease-in-out infinite ${index * 0.2}s`;
  });
});
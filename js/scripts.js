// js/scripts.js

(function () {
  // ----- GATE TAP TO OPEN ANIMATION -----
  const gate = document.getElementById('gateOverlay');
  const sealBtn = document.getElementById('gateSealBtn');
  document.body.classList.add('gate-locked');

  // Function to trigger the opening animation
  function openGate(e) {
    // prevent double-tap / double-click from messing up
    if (gate.classList.contains('gate--opening')) return;

    // add the opening class to start the animation (clip-path circle shrink)
    gate.classList.add('gate--opening');

    // after the animation duration (1.3s), hide the gate so content below is clickable
    setTimeout(() => {
      gate.style.display = 'none';
      gate.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('gate-locked');
    }, 1300); // matches transition duration in CSS (1.3s)
  }

  // Listen for click/tap on the seal button
  sealBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent bubbling to gate if needed
    openGate(e);
  });

  // Also listen for click/tap on the gate itself
  gate.addEventListener('click', function (e) {
    openGate(e);
  });

  // (Optional) Also allow touch events for mobile
  gate.addEventListener('touchstart', function (e) {
    // we don't want to interfere with scroll, but gate is fixed so it's fine.
    // the click event will handle it, but let's just ensure it works.
    // We'll let click handle it.
  }, { passive: true });

  // ----- Intersection Observer for scroll animations -----
  const animatedElements = document.querySelectorAll('.animate-fade-in-up, .animate-fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Also handle elements already in view on load
  setTimeout(() => {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100) {
        el.classList.add('animate-visible');
        observer.unobserve(el);
      }
    });
  }, 100);
})();

// ----- Countdown Timer (separate function) -----
(function () {
  const targetDate = new Date('October 18, 2026 12:00:00').getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
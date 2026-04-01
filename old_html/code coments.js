// Wait for the HTML content to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
  
  // ==========================================
  // SECTION 1: HERO IMAGE SLIDER
  // ==========================================
  const track = document.querySelector('.slides');

  // Only run slider logic if the slider container exists on this page
  if (track) {
    const prev = document.querySelector('.nav.prev');
    const next = document.querySelector('.nav.next');
    const dotsContainer = document.querySelector('.dots');
    let current = 0; // Tracks the current slide index

    // Hardcoded list of 22 image filenames located in assets/images
    const images = [
      '6c.jpg',
      'buffalo.jpg',
      'cebras-en-el-Parque-Nacional-de-Amboseli.jpg',
      'Discover The Wonders Of Masai Mara.jpg',
      'download (1).jpg',
      'download (2).jpg',
      'download (3).jpg',
      'download.jpg',
      'elephants-on-a-game-drive-in-the-masai-mara.jpg',
      'Guepardo-durante-el-safari-en-kenia-masai-mara-1.jpg',
      'hero (1).jpg',
      'hero (2).jpg',
      'hero (3).jpg',
      'hero (4).jpg',
      'hero (5).jpg',
      'hero (6).jpg',
      'hero (7).jpg',
      'hero (8).jpg',
      'KE_MasaiMara_AsiliaRekeroCampWildlifeMigration.jpg',
      'Leopard and her cubs are in the wild.jpg',
      'lion-kill-masai-mara-scaled.jpg',
      'maasai-mara-8-750x450.jpg'
    ];

    // --- Dynamic Slide Generation ---
    // Instead of hardcoding HTML, this loop groups images into sets of 4
    const perSlide = 4;
    for (let i = 0; i < images.length; i += perSlide) {
      // Get the next chunk of 4 images
      const group = images.slice(i, i + perSlide);
      
      // Create the slide container
      const slide = document.createElement('div');
      slide.className = 'slide';
      
      // Loop through the chunk and create image elements
      group.forEach(fname => {
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'assets/images/' + encodeURIComponent(fname);
        // Regex removes the file extension (e.g., .jpg) to create clean Alt text
        img.alt = fname.replace(/\.[^/.]+$/, '');
        fig.appendChild(img);
        slide.appendChild(fig);
      });
      track.appendChild(slide);
    }

    // Recalculate slides after dynamic creation
    let slides = Array.from(document.querySelectorAll('.slide'));
    const total = slides.length || 1;

    // --- Navigation Dots ---
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const btn = document.createElement('button');
        // On click, go to that specific slide index
        btn.addEventListener('click', () => { goTo(i); resetAuto(); });
        if (i === 0) btn.classList.add('active'); // Highlight first dot
        dotsContainer.appendChild(btn);
      });
    }
    const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

    // --- Core Slider Functions ---
    function update() {
      // Moves the track horizontally based on current index (-100%, -200%, etc.)
      track.style.transform = `translateX(-${current * 100}%)`;
      // Update dot active state
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(i) {
      // The modulo operator (%) ensures the slider loops endlessly
      // e.g., if on last slide and go Next, it wraps to 0
      // e.g., if on first slide and go Prev, it wraps to last
      current = ((i % total) + total) % total;
      update();
    }

    // Attach listeners to Left/Right arrows
    if (prev) prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    if (next) next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    // --- Autoplay Logic ---
    // Automatically change slide every 5 seconds
    let interval = setInterval(() => { goTo(current + 1); }, 5000);
    
    // Resets the timer so the slide doesn't change immediately after a user clicks manually
    function resetAuto() {
      clearInterval(interval);
      interval = setInterval(() => { goTo(current + 1); }, 5000);
    }

    // Pause autoplay when hovering over the hero section
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => clearInterval(interval));
      hero.addEventListener('mouseleave', () => resetAuto());
    }

    // --- Touch / Swipe Logic (Mobile) ---
    let startX = 0;
    let isTouching = false;

    // 1. User touches screen
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isTouching = true;
    });

    // 2. User drags finger
    track.addEventListener('touchmove', (e) => {
      if (!isTouching) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      // Visual feedback: moves the slider slightly as you drag
      track.style.transform = `translateX(calc(-${current * 100}% + ${diff}px))`;
    });

    // 3. User lifts finger
    track.addEventListener('touchend', (e) => {
      if (!isTouching) return;
      isTouching = false;
      const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
      const diff = endX - startX;
      
      // Determine swipe direction (threshold is 50px)
      if (diff > 50) goTo(current - 1); // Swiped Right -> Go Prev
      else if (diff < -50) goTo(current + 1); // Swiped Left -> Go Next
      else update(); // Swipe was too small, snap back to original position
      
      resetAuto();
    });

    // Initialize the slider position
    update();
  }

  // ==========================================
  // SECTION 2: FILTER BUTTONS (Safaris)
  // ==========================================
  const filterButtons = Array.from(document.querySelectorAll('.filter'));
  const safariCards = Array.from(document.querySelectorAll('.safaris .card'));
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Remove active state from all buttons
      filterButtons.forEach(b => { 
        b.classList.remove('active'); 
        b.setAttribute('aria-pressed', 'false'); // Accessibility
      });
      
      // 2. Activate clicked button
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      
      // 3. Filter the cards
      const filter = btn.dataset.filter; // e.g., 'all' or 'available'
      safariCards.forEach(card => {
        // Check custom data attribute on HTML: <div data-available="true">
        const available = card.dataset.available === 'true';
        
        if (filter === 'all' || (filter === 'available' && available)) {
          card.style.display = ''; // Show
        } else {
          card.style.display = 'none'; // Hide
        }
      });
    });
  });

  // ==========================================
  // SECTION 3: MOBILE NAVIGATION
  // ==========================================
  const menuIcon = 'assets/logos/menu_24dp_E3E3E3.svg';
  const closeIcon = 'assets/logos/close_24dp_E3E3E3.svg';

  const navToggles = Array.from(document.querySelectorAll('.nav-toggle'));
  const managedNavbars = [];

  navToggles.forEach(navToggleEl => {
    // Find the parent navbar container
    const navbarEl = navToggleEl.closest('.navbar');
    if (!navbarEl) return;
    
    const navToggleImg = navToggleEl.querySelector('img');
    const links = Array.from(navbarEl.querySelectorAll('.links a'));
    const linksContainer = navbarEl.querySelector('.links');

    // Setup initial accessibility states
    navToggleEl.setAttribute('aria-expanded', 'false');
    if (navToggleImg) { navToggleImg.src = menuIcon; navToggleImg.alt = 'menu'; }
    if (linksContainer) { linksContainer.style.maxHeight = '0px'; } // Start closed

    function closeMenu() {
      navbarEl.classList.remove('open');
      navToggleEl.classList.remove('open');
      // Swap icon back to hamburger
      if (navToggleImg) { navToggleImg.src = menuIcon; navToggleImg.alt = 'menu'; }
      // Collapse height
      if (linksContainer) { linksContainer.style.maxHeight = '0px'; }
      navToggleEl.setAttribute('aria-expanded', 'false');
      navToggleEl.setAttribute('aria-label', 'Open menu');
    }

    function openMenu() {
      navbarEl.classList.add('open');
      navToggleEl.classList.add('open');
      // Swap icon to X (close)
      if (navToggleImg) { navToggleImg.src = closeIcon; navToggleImg.alt = 'close'; }
      // Expand height based on actual content size
      if (linksContainer) {
        linksContainer.style.maxHeight = linksContainer.scrollHeight + 'px';
      }
      navToggleEl.setAttribute('aria-expanded', 'true');
      navToggleEl.setAttribute('aria-label', 'Close menu');
    }

    // Toggle click handler
    navToggleEl.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click from bubbling to document listener
      if (navbarEl.classList.contains('open')) closeMenu(); else openMenu();
    });

    // Close menu when a link inside it is clicked
    links.forEach(a => a.addEventListener('click', closeMenu));

    // Store references to manage global closing later
    managedNavbars.push({ navbarEl, navToggleEl, closeMenu, openMenu, linksContainer });
  });

  // --- Global Event Listeners for Menu ---
  
  // Close menu if user clicks anywhere outside the navbar
  document.addEventListener('click', (e) => {
    managedNavbars.forEach(m => {
      if (!m.navbarEl.contains(e.target)) m.closeMenu();
    });
  });

  // Close menu if user presses Escape key (Accessibility)
  document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') managedNavbars.forEach(m => m.closeMenu()); 
  });

  // Close menu if screen is resized to desktop (width > 720px)
  window.addEventListener('resize', () => { 
    if (window.innerWidth > 720) managedNavbars.forEach(m => m.closeMenu()); 
  });

  // ==========================================
  // SECTION 4: ACTIVE LINK HIGHLIGHTER
  // ==========================================
  (function setActiveNav(){
    // Get current filename (e.g., 'about.html') or default to 'index.html'
    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const navLinks = document.querySelectorAll('.navbar .links a');
    
    navLinks.forEach(a => {
      const href = a.getAttribute('href') ? a.getAttribute('href').toLowerCase() : '';
      
      // Match empty href or 'index.html'
      if (href === '' && path === 'index.html') a.classList.add('active');
      
      // Match exact filename
      if (href === path) a.classList.add('active');
      
      // Special case for root '/' path
      if ((href === 'index.html' || href === './') && (path === '' || path === 'index.html')) {
        a.classList.add('active');
      }
    });
  })();

});
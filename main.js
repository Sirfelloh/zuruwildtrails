document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.slides');

  if (track) {
    const prev = document.querySelector('.nav.prev');
    const next = document.querySelector('.nav.next');
    const dotsContainer = document.querySelector('.dots');
    let current = 0;

    // List all image files from assets/images (22 files)
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

    // build slides dynamically with 4 images each
    const perSlide = 4;
    for (let i = 0; i < images.length; i += perSlide) {
      const group = images.slice(i, i + perSlide);
      const slide = document.createElement('div');
      slide.className = 'slide';
      group.forEach(fname => {
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = 'assets/images/' + encodeURIComponent(fname);
        img.alt = fname.replace(/\.[^/.]+$/, '');
        fig.appendChild(img);
        slide.appendChild(fig);
      });
      track.appendChild(slide);
    }

    let slides = Array.from(document.querySelectorAll('.slide'));
    const total = slides.length || 1;

    // build dots
    if (dotsContainer) {
      slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.addEventListener('click', () => { goTo(i); resetAuto(); });
        if (i === 0) btn.classList.add('active');
        dotsContainer.appendChild(btn);
      });
    }
    const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

    function update() {
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(i) {
      current = ((i % total) + total) % total;
      update();
    }

    if (prev) prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
    if (next) next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });

    // autoplay
    let interval = setInterval(() => { goTo(current + 1); }, 5000);
    function resetAuto() {
      clearInterval(interval);
      interval = setInterval(() => { goTo(current + 1); }, 5000);
    }

    // pause on hover
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('mouseenter', () => clearInterval(interval));
      hero.addEventListener('mouseleave', () => resetAuto());
    }

    // swipe support for touch
    let startX = 0;
    let isTouching = false;
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isTouching = true;
    });
    track.addEventListener('touchmove', (e) => {
      if (!isTouching) return;
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      // small drag effect
      track.style.transform = `translateX(calc(-${current * 100}% + ${diff}px))`;
    });
    track.addEventListener('touchend', (e) => {
      if (!isTouching) return;
      isTouching = false;
      const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
      const diff = endX - startX;
      if (diff > 50) goTo(current - 1);
      else if (diff < -50) goTo(current + 1);
      else update();
      resetAuto();
    });

    // initial update
    update();
  }

  // filter buttons logic
  const filterButtons = Array.from(document.querySelectorAll('.filter'));
  const safariCards = Array.from(document.querySelectorAll('.safaris .card'));
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const filter = btn.dataset.filter;
      safariCards.forEach(card => {
        const available = card.dataset.available === 'true';
        if (filter === 'all' || (filter === 'available' && available)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ensure initial filter state (All)

  // Mobile nav toggle behavior (robust across pages)
  const menuIcon = 'assets/logos/menu_24dp_E3E3E3.svg';
  const closeIcon = 'assets/logos/close_24dp_E3E3E3.svg';

  const navToggles = Array.from(document.querySelectorAll('.nav-toggle'));
  const managedNavbars = [];

  navToggles.forEach(navToggleEl => {
    const navbarEl = navToggleEl.closest('.navbar');
    if (!navbarEl) return;
    const navToggleImg = navToggleEl.querySelector('img');
    const links = Array.from(navbarEl.querySelectorAll('.links a'));
    const linksContainer = navbarEl.querySelector('.links');

    // initialize
    navToggleEl.setAttribute('aria-expanded', 'false');
    if (navToggleImg) { navToggleImg.src = menuIcon; navToggleImg.alt = 'menu'; }
    if (linksContainer) { linksContainer.style.maxHeight = '0px'; }

    function closeMenu() {
      navbarEl.classList.remove('open');
      navToggleEl.classList.remove('open');
      if (navToggleImg) { navToggleImg.src = menuIcon; navToggleImg.alt = 'menu'; }
      if (linksContainer) { linksContainer.style.maxHeight = '0px'; }
      navToggleEl.setAttribute('aria-expanded', 'false');
      navToggleEl.setAttribute('aria-label', 'Open menu');
    }

    function openMenu() {
      navbarEl.classList.add('open');
      navToggleEl.classList.add('open');
      if (navToggleImg) { navToggleImg.src = closeIcon; navToggleImg.alt = 'close'; }
      if (linksContainer) {
        // expand to fit content for reliability
        linksContainer.style.maxHeight = linksContainer.scrollHeight + 'px';
      }
      navToggleEl.setAttribute('aria-expanded', 'true');
      navToggleEl.setAttribute('aria-label', 'Close menu');
    }

    navToggleEl.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navbarEl.classList.contains('open')) closeMenu(); else openMenu();
    });

    links.forEach(a => a.addEventListener('click', closeMenu));

    managedNavbars.push({ navbarEl, navToggleEl, closeMenu, openMenu, linksContainer });
  });

  // Close when clicking outside any managed navbar
  document.addEventListener('click', (e) => {
    managedNavbars.forEach(m => {
      if (!m.navbarEl.contains(e.target)) m.closeMenu();
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') managedNavbars.forEach(m => m.closeMenu()); });

  // Ensure menus close when resizing to desktop widths
  window.addEventListener('resize', () => { if (window.innerWidth > 720) managedNavbars.forEach(m => m.closeMenu()); });

  // set active nav link based on page
  (function setActiveNav(){
    const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const navLinks = document.querySelectorAll('.navbar .links a');
    navLinks.forEach(a => {
      const href = a.getAttribute('href') ? a.getAttribute('href').toLowerCase() : '';
      if (href === '' && path === 'index.html') a.classList.add('active');
      if (href === path) a.classList.add('active');
      // mark home when visiting root (e.g., /)
      if ((href === 'index.html' || href === './') && (path === '' || path === 'index.html')) a.classList.add('active');
    });
  })();

});

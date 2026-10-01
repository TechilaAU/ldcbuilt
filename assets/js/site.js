// =====================================================
// LDC BUILT — Global JS
// =====================================================

// ============ CURSOR ============
(function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animate() {
    const dx = mouseX - ringX;
    const dy = mouseY - ringY;
    ringX += dx * 0.15;
    ringY += dy * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  function bindHover() {
    document.querySelectorAll('a, button, .design-card, .region-card, [data-hover]')
      .forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => {
          dot.classList.add('active');
          ring.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
          dot.classList.remove('active');
          ring.classList.remove('active');
        });
      });
  }
  bindHover();
  // Re-bind on dynamic content (e.g. filtering)
  window.bindCursor = bindHover;
})();

// ============ MOBILE NAV ============
(function initMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    drawer.classList.toggle('open');
    toggle.textContent = drawer.classList.contains('open') ? 'Close' : 'Menu';
  });
})();

// ============ SCROLL REVEAL (subtle) ============
(function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();

// ============ SHARED: swipe helper ============
function ldcOnSwipe(el, onLeft, onRight) {
  let x0 = null, y0 = null;
  el.addEventListener('pointerdown', (e) => { x0 = e.clientX; y0 = e.clientY; });
  el.addEventListener('pointerup', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0;
    x0 = y0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? onLeft : onRight)();
  });
  el.addEventListener('pointercancel', () => { x0 = y0 = null; });
}

// ============ FACADE SLIDER (design pages) ============
(function initFacadeSlider() {
  const slider = document.querySelector('[data-facade-slider]');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('.fs-slide'));
  const dots = Array.from(slider.querySelectorAll('.fs-dot'));
  const sub = slider.querySelector('.showcase-label-sub');
  const main = slider.querySelector('.showcase-label-main');
  const cards = Array.from(document.querySelectorAll('.facade-card[data-facade-index]'));
  const pad = (n) => String(n).padStart(2, '0');
  let i = 0;

  function go(n) {
    if (!slides.length) return;
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
    cards.forEach((c, k) => c.classList.toggle('is-current', k === i));
    if (sub) sub.textContent = 'Facade ' + pad(i + 1) + ' / ' + pad(slides.length);
    if (main) main.textContent = slides[i].dataset.name || '';
  }

  const prev = slider.querySelector('.fs-prev');
  const next = slider.querySelector('.fs-next');
  if (prev) prev.addEventListener('click', () => go(i - 1));
  if (next) next.addEventListener('click', () => go(i + 1));
  dots.forEach((d, k) => d.addEventListener('click', () => go(k)));
  ldcOnSwipe(slider, () => go(i + 1), () => go(i - 1));
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(i - 1);
    if (e.key === 'ArrowRight') go(i + 1);
  });
  cards.forEach((c, k) => {
    const pick = () => {
      go(k);
      slider.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    c.addEventListener('click', pick);
    c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
  });
  go(0);
})();

// ============ FLOOR PLAN LIGHTBOX (design pages) ============
(function initPlanLightbox() {
  const figures = Array.from(document.querySelectorAll('.plan-figure'));
  if (!figures.length) return;

  // One gallery per page: every plan image across every layout, de-duplicated.
  const items = [];
  const seen = {};
  figures.forEach((fig) => {
    const img = fig.querySelector('img');
    if (!img) return;
    const src = img.getAttribute('src');
    const capEl = fig.querySelector('.plan-figure-cap');
    if (!(src in seen)) {
      seen[src] = items.length;
      items.push({ src: src, cap: capEl ? capEl.textContent.trim() : (img.alt || '') });
    }
    img.dataset.zoomable = '1';
    img.dataset.zoomIndex = seen[src];
    if (!fig.querySelector('.plan-zoom-hint')) {
      const hint = document.createElement('span');
      hint.className = 'plan-zoom-hint';
      hint.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>Enlarge';
      fig.appendChild(hint);
    }
  });

  const arrow = (d) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="' + d + '"/></svg>';
  const box = document.createElement('div');
  box.className = 'plan-lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Floor plan viewer');
  box.innerHTML =
    '<div class="plan-lightbox-top"><div><span class="plan-lightbox-cap"></span><span class="plan-lightbox-count"></span></div>' +
    '<button class="plan-lightbox-close" aria-label="Close">' + arrow('M6 6l12 12M18 6L6 18') + '</button></div>' +
    '<div class="plan-lightbox-stage">' +
    '<button class="fs-nav fs-prev" aria-label="Previous plan">' + arrow('M15 18l-6-6 6-6') + '</button>' +
    '<img alt="">' +
    '<button class="fs-nav fs-next" aria-label="Next plan">' + arrow('M9 18l6-6-6-6') + '</button>' +
    '</div>';
  document.body.appendChild(box);

  const stage = box.querySelector('.plan-lightbox-stage');
  const bigImg = stage.querySelector('img');
  const cap = box.querySelector('.plan-lightbox-cap');
  const count = box.querySelector('.plan-lightbox-count');
  const prev = box.querySelector('.fs-prev');
  const next = box.querySelector('.fs-next');
  let i = 0;

  if (items.length < 2) { prev.style.display = 'none'; next.style.display = 'none'; }

  function show(n) {
    i = (n + items.length) % items.length;
    bigImg.src = items[i].src;
    bigImg.alt = items[i].cap;
    cap.textContent = items[i].cap;
    count.textContent = (i + 1) + ' / ' + items.length;
  }
  function open(n) {
    show(n);
    box.classList.add('open');
    document.body.classList.add('lightbox-open');
    box.querySelector('.plan-lightbox-close').focus();
  }
  function close() {
    box.classList.remove('open');
    document.body.classList.remove('lightbox-open');
  }

  document.querySelectorAll('.plan-figure img[data-zoomable]').forEach((img) => {
    img.setAttribute('tabindex', '0');
    img.addEventListener('click', () => open(parseInt(img.dataset.zoomIndex, 10)));
    img.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(parseInt(img.dataset.zoomIndex, 10)); });
  });
  prev.addEventListener('click', (e) => { e.stopPropagation(); show(i - 1); });
  next.addEventListener('click', (e) => { e.stopPropagation(); show(i + 1); });
  box.querySelector('.plan-lightbox-close').addEventListener('click', close);
  stage.addEventListener('click', (e) => { if (e.target === stage) close(); });
  ldcOnSwipe(stage, () => show(i + 1), () => show(i - 1));
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
  if (window.bindCursor) window.bindCursor();
})();

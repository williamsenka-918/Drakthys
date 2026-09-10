const burger = document.getElementById('burger');
  const navlinks = document.getElementById('navlinks');
  burger.addEventListener('click', () => navlinks.classList.toggle('open'));
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

  let cart = 0;
  const cartCount = document.getElementById('cartCount');
  document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      cart++;
      cartCount.textContent = 'Cart · ' + cart;
      const original = btn.textContent;
      btn.textContent = 'Added';
      setTimeout(() => { btn.textContent = original; }, 900);
    });
  });

  const joinForm = document.getElementById('joinForm');
  joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = joinForm.querySelector('input');
    const btn = joinForm.querySelector('button');
    btn.textContent = 'Subscribed';
    input.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; }, 1800);
  });

  /* shop category filter */
  function filterShop(cat){
    document.querySelectorAll('.shop-tile').forEach(t => t.classList.toggle('active', t.dataset.filter === cat));
    document.querySelectorAll('.product').forEach(p => {
      const show = cat === 'all' || p.dataset.cat === cat;
      p.classList.toggle('hide', !show);
    });
    document.getElementById('shop').scrollIntoView({behavior:'smooth', block:'start'});
  }
  window.filterShop = filterShop;

  /* match tabs */
  const matchTabs = document.querySelectorAll('.match-tab');
  matchTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      matchTabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.match-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector('.match-panel[data-panel="' + tab.dataset.tab + '"]').classList.add('active');
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navA = document.querySelectorAll('.navlinks > a, .navlinks .navitem > a');
  window.addEventListener('scroll', () => {
    let current = 'top';
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 140) current = sec.id; });
    navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  const primary = [
    ['index.html','Home'],['about.html','About'],['experience.html','Experience'],
    ['projects.html','Projects'],['research.html','Research'],['education.html','Education'],
    ['skills.html','Skills'],['achievements.html','Achievements'],['contact.html','Contact']
  ];
  const nav = document.createElement('nav');
  nav.className='site-nav';
  nav.innerHTML=`
    <div class="shell nav-inner">
      <a class="brand" href="index.html"><span class="brand-mark">NNF</span><span>Nuraia</span></a>
      <div class="nav-links" id="navLinks">
        ${primary.map(([h,l])=>`<a href="${h}" class="${path===h?'active':''}">${l}</a>`).join('')}
        <a href="creative.html" class="secondary ${path==='creative.html'?'active':''}">Creative Corner</a>
      </div>
      <div class="nav-actions">
        <button class="icon-btn" id="themeToggle" aria-label="Toggle theme">◐</button>
        <button class="menu-btn" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      </div>
    </div>`;
  document.currentScript.insertAdjacentElement('afterend',nav);
  const menu=nav.querySelector('#navLinks'), btn=nav.querySelector('#menuToggle');
  btn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'×':'☰';});
  const root=document.documentElement,saved=localStorage.getItem('theme'); if(saved) root.dataset.theme=saved;
  nav.querySelector('#themeToggle')?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('theme',next);});
  const onScroll=()=>nav.classList.toggle('scrolled',scrollY>8);onScroll();addEventListener('scroll',onScroll,{passive:true});
})();

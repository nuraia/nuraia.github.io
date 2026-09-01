(() => {
  const footer=document.createElement('footer');footer.className='site-footer';
  footer.innerHTML=`<div class="shell footer-inner"><div>© <span id="year"></span> Nuraia Nahrin Fahmida · Software, research, and creative work.</div><div class="footer-links"><a href="mailto:nuraianahrinfh@email.com">Gmail</a><a href="tel:+8801805509834">Phone</a><a href="creative.html">Creative Corner</a></div></div>`;
  document.body.appendChild(footer);footer.querySelector('#year').textContent=new Date().getFullYear();
})();

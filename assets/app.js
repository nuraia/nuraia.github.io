(() => {
  const nodes=document.querySelectorAll('.card,.feature,.timeline-item,.edu-item,.art-tile,.experience-card,.project-showcase,.video-shell,.gallery-item,.pagehead > *,.hero > div > *');
  nodes.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=`${Math.min((i%8)*45,250)}ms`;});
  if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});nodes.forEach(el=>io.observe(el));}
  else nodes.forEach(el=>el.classList.add('is-visible'));
})();

// Mobile menu
function toggleMenu(){
  document.getElementById('hbg').classList.toggle('open');
  document.getElementById('mob').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
}

// Scroll reveal
var ob = new IntersectionObserver(function(e){
  e.forEach(function(x){ if(x.isIntersecting) x.target.classList.add('on'); });
}, {threshold: 0.07});
document.querySelectorAll('.rv').forEach(function(r){ ob.observe(r); });

// Nav shadow on scroll
window.addEventListener('scroll', function(){
  document.getElementById('nav').style.boxShadow =
    window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,.1)' : '0 2px 12px rgba(0,0,0,.06)';
});

// Modal system
function openModal(id){
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.querySelectorAll('.modal.open').forEach(function(m){
    m.classList.remove('open');
  });
  document.body.style.overflow = '';
}
// Close modal on Escape key
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeModal();
});

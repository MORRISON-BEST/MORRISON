function toggleMenu(){document.getElementById('hbg').classList.toggle('open');document.getElementById('mob').classList.toggle('open');}
function closeMenu(){document.getElementById('hbg').classList.remove('open');document.getElementById('mob').classList.remove('open');}
var ob=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('on');});},{threshold:0.07});
document.querySelectorAll('.rv').forEach(function(r){ob.observe(r);});
window.addEventListener('scroll',function(){document.getElementById('nav').style.boxShadow=window.scrollY>20?'0 2px 20px rgba(0,0,0,.1)':'0 2px 12px rgba(0,0,0,.06)';});

function toggleCard(button){var target=document.getElementById(button.dataset.target);if(!target)return;var expanded=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',(!expanded).toString());target.classList.toggle('open',!expanded);if(!expanded){button.textContent='Hide summary';}else{button.textContent='Read summary';}}
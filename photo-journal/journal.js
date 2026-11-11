const links=[...document.querySelectorAll('.photo-open')], viewer=document.getElementById('viewer');
let current=0,returnFocus=null;
function showPhoto(index){current=(index+links.length)%links.length;const link=links[current],img=document.getElementById('full-photo');img.src=link.href;img.alt=link.dataset.caption;document.getElementById('photo-caption').textContent=link.dataset.caption;document.getElementById('photo-counter').textContent=`${current+1} / ${links.length}`;}
links.forEach((a,i)=>a.addEventListener('click',e=>{if(!viewer.showModal)return;e.preventDefault();returnFocus=a;showPhoto(i);viewer.showModal();document.body.classList.add('viewer-open');document.getElementById('close-photo').focus();}));
document.getElementById('close-photo').addEventListener('click',()=>viewer.close());
viewer.addEventListener('close',()=>{document.body.classList.remove('viewer-open');returnFocus?.focus();});
document.getElementById('prev-photo').addEventListener('click',()=>showPhoto(current-1));
document.getElementById('next-photo').addEventListener('click',()=>showPhoto(current+1));
viewer.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(current-1);}if(e.key==='ArrowRight'){e.preventDefault();showPhoto(current+1);}});

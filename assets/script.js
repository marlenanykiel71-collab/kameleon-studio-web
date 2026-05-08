const SECTIONS=[
 {id:"o-nas",label:"O nas"},
 {id:"oferta",label:"Oferta"},
 {id:"dlaczego-my",label:"Dlaczego my"},
 {id:"galeria",label:"Galeria"},
 {id:"faq",label:"FAQ"},
 {id:"kontakt",label:"Kontakt"}
];
const PHOTOS=[
 {src:"./assets/gal-1.jpg",alt:"Stylowe cięcie bob",cap:"Klasyczny bob z grzywką"},
 {src:"./assets/gal-2.jpg",alt:"Męska stylizacja fade",cap:"Męski fade i pompadour"},
 {src:"./assets/gal-3.jpg",alt:"Koloryzacja balayage",cap:"Multicolor balayage"},
 {src:"./assets/gal-4.jpg",alt:"Upięcie ślubne",cap:"Elegancki kok ślubny"},
 {src:"./assets/gal-5.jpg",alt:"Stylizacja loków",cap:"Definicja loków"},
 {src:"./assets/gal-6.jpg",alt:"Pastelowa koloryzacja",cap:"Pastelowy róż"}
];
const FAQS=[
 {q:"Czy konieczna jest wcześniejsza rezerwacja wizyty?",a:"Tak, ze względu na duże zainteresowanie zalecamy umawianie wizyt z wyprzedzeniem — telefonicznie lub osobiście w salonie."},
 {q:"Jakich produktów używacie podczas zabiegów?",a:"Pracujemy wyłącznie na profesjonalnych kosmetykach uznanych marek, dbając o zdrowie i kondycję włosów."},
 {q:"Czy oferujecie konsultacje przed metamorfozą?",a:"Oczywiście — przed każdą większą zmianą fryzury odbywa się bezpłatna konsultacja."},
 {q:"Ile trwa profesjonalna koloryzacja?",a:"W zależności od techniki i długości włosów zabieg trwa od 2 do 4 godzin."},
 {q:"Czy salon jest przyjazny dzieciom?",a:"Tak, wykonujemy strzyżenia dziecięce w spokojnej atmosferze."}
];

function scrollToId(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});closeMobile();}

// Build nav
const navLinks=document.getElementById('navLinks');
const mobileNav=document.getElementById('mobileNav');
SECTIONS.forEach(s=>{
  const b=document.createElement('button');b.textContent=s.label;b.onclick=()=>scrollToId(s.id);navLinks.appendChild(b);
  const m=document.createElement('button');m.textContent=s.label;m.onclick=()=>scrollToId(s.id);mobileNav.appendChild(m);
});
const mCta=document.createElement('a');mCta.className='btn btn-cta';mCta.href='tel:+48123456789';mCta.innerHTML='<i class="fa-solid fa-phone"></i> +48 123 456 789';mobileNav.appendChild(mCta);

// Burger
const burger=document.getElementById('burger');const mobileMenu=document.getElementById('mobileMenu');
burger.onclick=()=>{const o=mobileMenu.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.innerHTML=o?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';};
function closeMobile(){mobileMenu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.innerHTML='<i class="fa-solid fa-bars"></i>';}

// Scroll header
const navEl=document.getElementById('nav');
window.addEventListener('scroll',()=>navEl.classList.toggle('scrolled',window.scrollY>12),{passive:true});

// Gallery
const gal=document.getElementById('gallery');
PHOTOS.forEach((p,i)=>{
  const f=document.createElement('figure');f.className='reveal';f.style.transitionDelay=(i*60)+'ms';
  f.innerHTML=`<button onclick="openLightbox(${i})" aria-label="Powiększ: ${p.cap}"><img src="${p.src}" alt="${p.alt}" loading="lazy" width="800" height="800" /></button><figcaption>${p.cap}</figcaption>`;
  gal.appendChild(f);
});

// FAQ
const faqEl=document.getElementById('faq');
FAQS.forEach((f,i)=>{
  const d=document.createElement('div');d.className='item reveal'+(i===0?' open':'');
  d.innerHTML=`<button class="q" aria-expanded="${i===0}"><span>${f.q}</span><i class="fa-solid fa-plus"></i></button><div class="a"><p>${f.a}</p></div>`;
  d.querySelector('.q').onclick=()=>{const o=d.classList.toggle('open');d.querySelector('.q').setAttribute('aria-expanded',o);};
  faqEl.appendChild(d);
});
// FAQPage JSON-LD
const faqLd=document.createElement('script');faqLd.type='application/ld+json';
faqLd.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))});
document.head.appendChild(faqLd);

// Lightbox
let lbIdx=0;const lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap');
function openLightbox(i){lbIdx=i;lbImg.src=PHOTOS[i].src;lbImg.alt=PHOTOS[i].alt;lbCap.textContent=PHOTOS[i].cap;lb.classList.add('open');document.body.style.overflow='hidden';}
function closeLightbox(){lb.classList.remove('open');document.body.style.overflow='';}
lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox();});
document.addEventListener('keydown',e=>{
  if(!lb.classList.contains('open'))return;
  if(e.key==='Escape')closeLightbox();
  if(e.key==='ArrowRight'){lbIdx=(lbIdx+1)%PHOTOS.length;openLightbox(lbIdx);}
  if(e.key==='ArrowLeft'){lbIdx=(lbIdx-1+PHOTOS.length)%PHOTOS.length;openLightbox(lbIdx);}
});

// Policy
const pol=document.getElementById('policy');
function openPolicy(){pol.classList.add('open');document.body.style.overflow='hidden';}
function closePolicy(){pol.classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&pol.classList.contains('open'))closePolicy();});

// Year
document.getElementById('year').textContent=new Date().getFullYear();

// Reveal
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

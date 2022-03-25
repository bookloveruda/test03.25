'use strict';

const gallery = document.querySelector('.gallery');
const galleryUl = document.querySelector('.gallery>ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const liSize = galleryUlLi.length      // <- 8


const arrBg = [];

  // (i<8) 
// i = 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, 5, 6, 7, 0, 1, 2, 3, 4, ...
for(let i=0; i<galleryUlLi.length; i++){
  arrBg.push(`url(img/${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}



let i = -1;

const autoGallery=()=>{
  i++;
  console.log(`i -> ${i}`);

  const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
  const goto = (-i*gap) + 'px';

  // 0, -1000, -2000, -3000, -4000 .....
  gallery.style.left = goto;
  gallery.style.transition = 'all 0.5s';

  if(i>=liSize-1) i= -1;    
  // i = -1, 0, 1, 2, 3, 4, 5, 6
  // (i>=8-1) = (i>=7) 
}

let setIn = setInterval(autoGallery,5000);




const arrow = document.querySelectorAll('span.arrow');

arrow.forEach(el=>{
  el.addEventListener('mouseover' , ()=> clearInterval(setIn));
  el.addEventListener('mouseout' , ()=> setIn = setInterval(autoGallery,5000));
});





(()=>autoGallery())();
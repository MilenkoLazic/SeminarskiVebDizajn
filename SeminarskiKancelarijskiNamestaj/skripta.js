

let indeksBroj = 0;
prikaziSlajdove(indeksBroj);

function pomeriSlajdove(broj) {
  prikaziSlajdove(indeksBroj += broj);
}

function prikaziSlajdove(broj) {
    let slajdovi = document.querySelectorAll(".slajd"); 
   setujResetuj(slajdovi,broj);
}

function setujResetuj(slajdovi,broj){
  if (broj >= slajdovi.length) {
    indeksBroj = 0;
} 
if (broj < 0) {
  indeksBroj = slajdovi.length - 1;
}
for (let i = 0; i < slajdovi.length; i++) {
  slajdovi[i].style.display = "none";
}
slajdovi[indeksBroj].style.display = "block";
}


 let hamburgerMeni = document.querySelector(".hamburger-meni-navigacija");
let navigacija = document.querySelector(".mobilna-navigacija");

hamburgerMeni.addEventListener('click',function(){
  navigacija.classList.toggle('aktivno');
  
  
});

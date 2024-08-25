function inicijalizuj(){
    let kartice=[
        {naziv:'Stolica 1',tekst:'Opis:Napravljena od visokokvalitetnog drveta, sa mekom, prijatnom sedisnom povrsinom, savrsena je za moderne trpezarije.',urlSlike:'slike/slikeNamestaja/0.jpg'},
        {naziv:'Stolica 2',tekst:'Opis:Ova stolica je kreirana za moderne enterijere koji se fokusiraju ka jednostavnosti i funkcionalnosti.Skandinavski dizajn.',urlSlike:'slike/slikeNamestaja/1.jpg'},
        {naziv:'Stolica 3',tekst:'Opis:Moderna stolica donosi dozu luksuza i tradicije u svaki prostor.Savrsena za kancelarije',urlSlike:'slike/slikeNamestaja/3.jpg'},
        {naziv:'Stolica 4',tekst:'Opis: Drvena stolica koja odise toplinom i udobnoscu. Savrsena za seoske kuce i vikendice.',urlSlike:'slike/slikeNamestaja/4.jpg'},
        {naziv:'Stolica 5',tekst:'Opis: Stolica sa ergonomskim dizajnom. Ovaj komad nameštaja pruža savršenu kombinaciju stila i komfora.',urlSlike:'slike/slikeNamestaja/5.jpg'},
        {naziv:'Stolica 6',tekst:'Opis: Snazna, stolica sa drvenim sedistem.Kombinacija sa bilo cim i dodatna funkcionalnost u dizajnu.',urlSlike:'slike/slikeNamestaja/6.jpg'},
    ];
    return kartice;
};
function izvrtiKakoTreba(kartice){
    let kontejner = document.querySelector('.kartice');
    for(let i=0;i<6;i+=2){
       
        let elementZaPrikaz = document.createElement('div');
        
        //dodavanje bootstrap-a
        elementZaPrikaz.innerHTML=`<div class="row"><div class="card mb-5 mt-5 col" style=" width: 5rem; margin-right:80px;">
  <img src="${kartice[i].urlSlike}" class="card-img-top" alt="..." style="width:250px; height:250px; padding:5px; mx-auto;">
  <div class="card-body">
    <h5 class="card-title">${kartice[i].naziv}</h5>
   <p class="card-text" style="font-style:italic; font-size:small;">${kartice[i].tekst}</p>
    <button class="btn btn-success" >Kupi</button>
  </div>
</div>
<div class="card mb-5 mt-5 col" style="width: 5rem;">
  <img src="${kartice[i+1].urlSlike}" class="card-img-top" alt="..." style="width:250px; height:250px; padding:5px; mx-auto;">
  <div class="card-body">
    <h5 class="card-title">${kartice[i+1].naziv}</h5>
    <p class="card-text" style="font-style:italic;  font-size:small;">${kartice[i+1].tekst}</p>
    <button class="btn btn-success">Kupi</button>
  </div>
</div></div>`;
    kontejner.appendChild(elementZaPrikaz);
    
    }
};
document.addEventListener('DOMContentLoaded',function(){
    
   
    let rezultat = inicijalizuj();
    izvrtiKakoTreba(rezultat);
    

});



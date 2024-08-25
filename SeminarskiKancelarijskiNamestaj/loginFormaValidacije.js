document.querySelector(".formaPolje").addEventListener("submit", function(event) {
    let emailInputPolje = document.getElementById("lozinka");
    let promenljiva=Provera(emailInputPolje);
    if(!promenljiva){

        event.preventDefault();
    }
    
  });
   function Provera(emailInputPolje){
    let polje = emailInputPolje.value;
    if(polje.length<6){
        alert("Lozinka mora imati vise od 5 karaktera");
        return false;
    }
    alert("Uspesno popunjavanje!");
    return true;
  }
let entries = document.querySelectorAll (".pc-entry"); 


entries.forEach(function(element){
    element.addEventListener("click", clickHandler)

});


function clickHandler (event){
    //console.log(event.target);
    if(event.target.className== "pc-more"){
        //console.log("wayy!")
        //event.target.previousElementSibling.classList.toggle("exp");
        this.classList.toggle("exp");
    }
}



var slideIndex = 0;   // variabel der hedder slideIndex, hvor værdien 0 er indsat


/* Nedenstående er en function der er navngivet "carousel". 
En "function" udfører en bestemt handling. Handlingen er specificeret inden for turborgparanteserne. */


function carousel() { // Function "Carousel" - start. De lukkede paranteser "()" angiver at der ikke er nogen argumenter/parametre til funktionen
  var i; // Her defineres en variabel (var) - der er navngivet "i"
  var x; // Her defineres en variable (var) - der er navngivet "x"
  x = document.getElementsByClassName("mySlides"); // Her tildeles variablen "x" en liste over samtlige elementer der har class "mySlides" i det indlæste dokument. "mySlides" er et argument til getElementsByClassName, hvilket er en besked om at finde alle de elementer som har den class som er angivet i argumentet - som her er "mySlides" ."document" er et standardobject der eksisterer i Java. Og objectet "document" indeholder blandt andet funktionen getElementsByClassName. 
  for (i = 0; i < x.length; i++) { // Dette er en loop! "for" - er et statement, der fortæller at der skal køres en loop. Før loopen igang sættes, skal variablen "i" sættes til værdien 0. Semmikolen ";" afslutter handlingen.  Efter semikolen (;) står en betingelse - nemlig at variablen "i" skal være mindre end antallet af elementer i "x". "Length" betyder blot at det er antallet af elementer i variablen. Så længe den betingelse er sand, så udføres loopet - loopet er det som står mellem turborgparanteserne. Derefter udføres det sidste statement - som er "i++". "i++" betyder at variablen "i", tælles 1 op. Loopet fortsætter indtil at betingelsen ikke længere er opfyldt. 
    x[i].style.display = "none"; //x variablen tager det element som er angivet vha. "i". Det CSS element (style) der kaldes "display", sættes til "none". Når "none" er angivet, vises elementet ikke
  }
  slideIndex++; // "slideIndex" er en variabel, som blev angivet tidligere og sat til 0. Med tilføjelse af "++" tælles variablen 1 op.
  if (slideIndex > x.length) {//Her angives en betingelse-> hvis "slideIndex" er > end antallet af elementer i variablen x, så skal det der står mellem tuborgparanteserne udføres.
      slideIndex = 1; // Hvis betingelsen er sand, så skal variablen "slideIndex" sættes = 1.
  } 
  x[slideIndex-1].style.display = "block"; // Det element i "x" som SlideIndex peger på - som her er css.style - med navnet "display", det skal vises som "block"
  setTimeout(carousel, 2000); // Change image every 2 seconds // "setTimeout" fortæller at funktionen der står i parantes - her "carousel", skal kaldes efter en bestemt tidsinterval - her 2000milisekunder
}

carousel(); // Denne linie er besked om at udføre funktionen "carousel"




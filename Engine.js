var numeroJoueurCourant = 0;

//Nombre d allummettes enlevé
var boutonAllumette = document.querySelector(".boutonAllumette");
boutonAllumette.onclick = function(){
  var nombreAllumetteChoisi = document.querySelector("input:checked");
  var aQuiLeTourHTML = ul.children[numeroJoueurCourant];
  if (nombreAllumetteChoisi == null ) {
    alert("Choisir un chiffre !");
  }
  if (nombreAllumetteChoisi.value < 1 || nombreAllumetteChoisi.value >3) {
    alert("Ne pas tricher !");
  } else {
    var nb = nombreAllumetteChoisi.value;
    boite.enleverAllumette(nb);
    inputAllumette.value = boite.nombreAllumette;
    Tour();
  }
  if (boite.boiteVide() ) {
    alert("Vous avez perdu !");
    aQuiLeTourHTML.className= "red";
    desactiver();
  }
}

function Tour(){
  for (var i = 0; i < ul.children.length; i++) {
    ul.children[i].className = "";
  }
    var aQuiLeTourHTML = ul.children[numeroJoueurCourant];
    numeroJoueurCourant++;
    if (numeroJoueurCourant >= listJoueur.length) {
      numeroJoueurCourant = 0;
    }
    aQuiLeTourHTML.className = "green";
}

var numeroJoueurCourant = 0;
//nom du joueur
var bouton = document.querySelector('button');
var input = document.querySelector('body input');
var ul = document.querySelector('#nameJoueur');
var listJoueur = [];
bouton.onclick = function(){
  name = input.value;
  if (name == "") {
    alert("Veuillez saisir un nom !");
  } else {
    listJoueur.push(new Joueur(name));
    var balisLi = document.createElement("li");
    balisLi.innerHTML=name;
    ul.appendChild(balisLi);
    console.log(listJoueur);
  }
}

//nombre allumettes dans la boite
var inputAllumette = document.querySelector('.enterKeys');
var boutonPartie = document.querySelector('#boutonLancerPartie');
boutonPartie.onclick = function(){
  var value = inputAllumette.value;
  boite = new BoiteAllumette(value);
  console.log(boite);
  Tour();
}

//Nombre d allummettes enlevé
var boutonAllumette = document.querySelector(".boutonAllumette");
boutonAllumette.onclick = function(){
  var nombreAllumetteChoisi = document.querySelector("input:checked");
  if (nombreAllumetteChoisi == null) {
    alert("Choisir un chiffre !");
  }
  var nb = nombreAllumetteChoisi.value;
  boite.enleverAllumette(nb);
  inputAllumette.value = boite.nombreAllumette;
  Tour();
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

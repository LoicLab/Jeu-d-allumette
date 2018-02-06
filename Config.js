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
    balisLi.className = 'list-group-item';
    balisLi.innerHTML=name;
    ul.appendChild(balisLi);
  }
}

//nombre allumettes dans la boite
var cardePartie = document.querySelector('.ChoixAllumette');
var inputAllumette = document.querySelector('.enterKeys');
var boutonPartie = document.querySelector('#boutonLancerPartie');
boutonPartie.onclick = function(){
  var value = inputAllumette.value;
  boite = new BoiteAllumette(value);
  Tour();
  cardePartie.className = "display : ";
  activer();
}
// bouton.removeAttibue("disabled");

function activer() {
  bouton.setAttribute("disabled","disabled");
  input.setAttribute("disabled","disabled");
  inputAllumette.setAttribute("disabled","disabled");
  boutonPartie.setAttribute("disabled","disabled");
}

function desactiver(){
  bouton.removeAttribute("disabled");
  input.removeAttribute("disabled");
  inputAllumette.removeAttribute("disabled");
  boutonPartie.removeAttribute("disabled");
}

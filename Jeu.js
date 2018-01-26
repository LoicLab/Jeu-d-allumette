var balisLi = document.createElement("li");
var bouton = document.querySelector('button');
var input = document.querySelector('body input');
var ul = document.querySelector('#nameJoueur');
var name;
bouton.onclick = function(){
  name = input.value;
  ul.appendChild(balisLi);
}
  balisLi.innerHTML=name;

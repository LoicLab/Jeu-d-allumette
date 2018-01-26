creationJoueur: function(){
var balisP = document.createElement("p");
var input = document.querySelector('body input');
var form = document.querySelector('form');
var name = input.value;
input.onchange = function(){
  balisP.innerHTML=name;
  form.prepend(balisP);
}
}
}

function BoiteAllumette(initialisationAllumette) {
  if (initialisationAllumette < 0 || initialisationAllumette > 80 ) {
    initialisationAllumette =0;
    inputAllumette.value = initialisationAllumette;
    alert("Le minimum dans la boite et de 0 ou 80 maxi");
  }
  this.nombreAllumette = initialisationAllumette;

  this.enleverAllumette = function(nb){
    this.nombreAllumette = this.nombreAllumette - nb;
    if (this.nombreAllumette <=0) {
      this.nombreAllumette =0;
    }
  }

  this.boiteVide = function(){
    return this.nombreAllumette <= 0;
  }
}

function Joueur(name) {
  this.alias = name;
  }

// function Bot(){
// this._construct = function(nbAllumette){
//   nbAllumette = math.random(1,3);
// }
// }

let compteur = 0;

function changeColor() {
    if(compteur < 0) {
        document.getElementById("counter").style.color = "red"
      } else  if(compteur > 0) {
        document.getElementById("counter").style.color = "green"
      } else if(compteur == 0) {
        document.getElementById("counter").style.color = "black"
      }
}

function doDecrease() {
  compteur = compteur - 1;
  changeColor()
  document.getElementById("counter").innerHTML = compteur;
}

function reset() {
  compteur = 0;
  changeColor()
  document.getElementById("counter").innerHTML = compteur;
}

function doIncrease() {
  compteur = compteur + 1;
  changeColor()
  document.getElementById("counter").innerHTML = compteur;
}

document.getElementById("decrease").addEventListener("click", doDecrease);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("increase").addEventListener("click", doIncrease);


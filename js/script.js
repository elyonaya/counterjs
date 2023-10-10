let compteur = 0;

function doDecrease() {
  compteur = compteur - 1;
  document.getElementById("counter").innerHTML = compteur;
}

function reset() {
  compteur = 0;
  document.getElementById("counter").innerHTML = compteur;
}

function doIncrease() {
  compteur = compteur + 1;
  document.getElementById("counter").innerHTML = compteur;
}

document.getElementById("decrease").addEventListener("click", doDecrease);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("increase").addEventListener("click", doIncrease);
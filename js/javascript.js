var auJoueur1 = true;

var tab = document.getElementById("tableau");
var nbrLignes = 3;
var nbrColonnes = 3;

var auTour = document.getElementById("tour");

var n = document.getElementsByTagName("td");
var message = document.getElementById("message");
var victoire = document.getElementById("victoire");

var nbTour = 0;

console.log("Début de la partie");

for (var i = 0; i < nbrLignes; i++){
  var row = tab.insertRow();
  for (var j = 0; j < nbrColonnes; j++) {
    var cell = row.insertCell();
    cell.onclick = clickCell;
  }
}

function clickCell(e) {
  if (e.target.innerHTML == "X" || e.target.innerHTML == "O") {
    alert("Déjà utilisé, veuillez réessayer");
    return;
  }
  else if (auJoueur1 == true){
    auJoueur1 = false;
    nbTour++
    e.target.innerHTML = "X";
    e.target.style.color = "black";
    tour.innerHTML = ("Au tour du joueur 2");
    console.log("Tour "+ nbTour + " : cellule " + n.length + " prise par le joueur 1");
  }
  else {
    auJoueur1 = true;
    nbTour++
    e.target.innerHTML = "O";
    e.target.style.color = "white";
    tour.innerHTML = ("Au tour du joueur 1");
    console.log("Tour "+ nbTour + " : cellule " + n.length + " prise par le joueur 2");
  }
  verif(0,1,2);
  verif(3,4,5);
  verif(6,7,8);
  verif(0,3,6);
  verif(1,4,7);
  verif(2,5,8);
  verif(0,4,8);
  verif(2,4,6);
}

function invisible(){
  victoire.style.visibility = "hidden";
  location.reload();
}

function verif(a,b,c){
  if (n[a].innerHTML=="X" && n[b].innerHTML=="X" && n[c].innerHTML=="X"){
    // alert("Le joueur 1 a gagné !");
    tour.innerHTML = "Partie terminée"
    message.innerHTML = "Le joueur 1 a gagné ! <br> <br> Cliquez pour rejouer";
    victoire.style.visibility = "visible";
    console.log("Fin de la partie");
  }
  else if (n[a].innerHTML=="O" && n[b].innerHTML=="O" && n[c].innerHTML=="O"){
    // alert("Le joueur 2 a gagné !");
    victoire.style.visibility = "visible";
    message.innerHTML = "Le joueur 2 a gagné ! <br> <br> Cliquez pour rejouer"
    victoire.style.visibility = "visible";
    console.log("Fin de la partie");
  }
}

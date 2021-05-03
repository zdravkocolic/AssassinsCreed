
function visina(){
 
  var x = document.getElementById('Main').offsetHeight; //uzimam visinu
  var y=x;
  document.getElementById('side').style.height = y+'px';// dodeljujem visinu

  setTimeout(visina, 200) //treba mi milisec da bi brzo ispratio promenu

}

visina();



/*za scrool u gallery*/
function pomeraj(){
document.getElementById('naslov1').object.offsetTop;
document.onclick.goTo();
}
function pomeraj2(){
var x = document.getElementById('naslov2');
}





var slika = 0;


function prikaz() {
  var i;
  var div = document.getElementsByClassName("str");
  for (i = 0; i < div.length; i++) {
    div[i].style.display = "none";
  }
  slika++;
  if (slika > div.length) {slika = 1}
  div[slika-1].style.display = "block";
  setTimeout(prikaz, 3000); // menja svakih 3 sekunde
}
prikaz();
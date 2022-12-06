$ampoule = document.getElementById("ampoule");

$titre = document.getElementById("titre");

$menu = document.getElementById("menus");

$stade = document.getElementById("stade");

$cardeurs = document.getElementById("cardeurs");

$saintevictoire = document.getElementById("saintevictoire");

$calanque = document.getElementById("calanque");

$zizoukarim = document.getElementById("zizoukarim");

$cassis = document.getElementById("cassis");

$ampoule.style.animation = "descenteampoule 3s both";

$titre.style.animation = "descentetexte 3s both";

function clickTexte() {
	$ampoule.style.animation = "monteeampoule 3s both";
	$titre.style.animation = "monteetexte 3s both";
	$menu.style.display = "block";
	document.body.style.backgroundColor = '#FFEAA2';
}

function click1(){
	$stade.style.animation = "descentestade 4s both";
};

function click2(){
	$cardeurs.style.animation = "descentecardeurs 4s both";
};

function click3(){
	$saintevictoire.style.animation = "descentesaintevictoire 4s both";
};

function click4(){
	$calanque.style.animation = "descentecalanque 4s both";
};

function click5(){
	$zizoukarim.style.animation = "descentezizoukarim 4s both";
};

function click6(){
	$cassis.style.animation = "descentecassis 4s both";
};
// Ici se trouvent les actions qui contrôlent la taille des diapos

$(document).ready(function (){
	var hauteur = $(".lastParagraphe").position().top + $(".lastParagraphe").height() + 80;
	$('.carousel-item div').css('height', hauteur);
});
// Ici se trouvent les actions qui créent l'ombre sous la navbar dans le carton

$( window ).scroll(function() {
	var distanceScrollTop, 
		hauteurCarton,
		distanceFinCarton,
		opaciteAAppliquer;

	distanceScrollTop = $( window ).scrollTop();
	hauteurCarton = $( ".cartonInvitation" ).height();
	opaciteAAppliquer = 1.3 - Math.pow(( distanceScrollTop / hauteurCarton ), 2);

	if ( distanceScrollTop == 0 ) {
		$( ".navbar" ).removeClass("boxAvecOmbre");
	} else if ( distanceScrollTop < hauteurCarton ){
		$( ".navbar" ).addClass("boxAvecOmbre");
	} else {
		$( ".navbar" ).removeClass("boxAvecOmbre");
	}

	$( ".cartonInvitation" ).fadeTo(1, opaciteAAppliquer);
});
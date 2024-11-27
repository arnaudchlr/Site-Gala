// Ici se trouvent les actions qui contrôlent le déroulement du carousel aux flèches

$( window ).on( "keydown", function(event) {
	if ( event.which == 39 ) {
		$('.carousel').carousel('next');
	} else if(event.which == 37){
		$('.carousel').carousel('prev');
	}
});
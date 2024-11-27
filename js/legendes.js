// Ici se trouvent les actions qui gèrent la légende des images

$(document).ready(function() {
	function legendeResize() {
		if ($(window).width() < 992) {
			$(".legendeGauche").addClass("legendeMobile");
			$(".legendeMobile").removeClass("legendeGauche");
		} else {
			$(".legendeMobile").addClass("legendeGauche");
			$(".legendeGauche").removeClass("legendeMobile");
		}
	}
	legendeResize();
	$(window).bind("resize", function() {
		legendeResize();
	});
});
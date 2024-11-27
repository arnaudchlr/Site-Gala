// Ici se trouvent les actions qui gèrent le dimansionnement des images

$(document).ready(function() {			
	function imageResize() { 
		var divH = $('.active div').height();
		var divW = $('.active div').width();
		var imgH = $('.active img').height();
		var imgW = $('.active img').width();

		if ((imgH < divH)) {
			$(".reglageHorizontal").addClass("reglageVertical");
			$(".reglageVertical").removeClass("reglageHorizontal");
		}

		if ((imgW < divW)) {
			$(".reglageVertical").addClass("reglageHorizontal");
			$(".reglageHorizontal").removeClass("reglageVertical");
		}
	}
	imageResize();
	$(window).bind("resize", function(){
		imageResize();  
	});  
});
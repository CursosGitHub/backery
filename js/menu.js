$(document).ready(function(){
	//Menu
	$('.icon-menu').click(function(){
		$('.items').slideToggle('slow','linear');
	});

	//Banner
	var banner = $('.imagenes');
	var siguiente = $('#btn-next');
	var anterior = $('#btn-prev');

	//mover ultima imagen al primer lugar
	$('.imagenes section:last').insertBefore('.imagenes section:first');

	banner.css('margin-left','-'+100+'%');

	function moverD(){
		banner.animate({marginLeft:'-200%'},700,function(){
			$('.imagenes section:first').insertAfter('.imagenes section:last');
			banner.css('margin-left','-'+100+'%');
		});
	};

	function moverI(){
		banner.animate({marginLeft:'0%'},700,function(){
			$('.imagenes section:last').insertBefore('.imagenes section:first');
			banner.css('margin-left','-'+100+'%');
		});
	};

	siguiente.on('click',function(){
		moverD();
	});

	anterior.on('click',function(){
		moverI();
	});

	//Auto
	function autoPlay(){
		interval = setInterval(function(){
			moverD();
		},5000)
	}
	autoPlay();

});
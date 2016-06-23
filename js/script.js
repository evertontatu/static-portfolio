$('.nav-toggle').click(function() {
	var altura = $('.nav ul').height();
	if($('.nav').hasClass('fechada')) {
		$('.nav').animate({height:altura},{queue:false, duration:200}).removeClass('fechada');
	}
	else {
		$('.nav').animate({height:'0px'},{queue:false, duration:200}).addClass('fechada');
	}
});

$(function(){
	$('.nav-toggle').click(function() {
		var altura = $('.nav ul').height();
		if($('.nav').hasClass('fechada')) {
			$('.nav').animate({height:altura},{queue:false, duration:200}).removeClass('fechada');
		}
		else {
			$('.nav').animate({height:'0px'},{queue:false, duration:200}).addClass('fechada');
		}
	});
});

$(function(){
	var widthDevice = $(window).width();
	var heightDevice = $(window).height();

	$('.home').css('height', heightDevice);
	$('.site-footer').css('height', heightDevice/2);
});

$(function(){

	$('.menu-mobile').click(function() {
		$('#nav').css('display', flex);
	})

});

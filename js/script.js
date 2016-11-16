//MENU NAV OPEN OR CLOSE DEPEND WIDTH DEVICE AND CLICK
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

//GET DEVICE HEIGHT
$(function(){
	var widthDevice = $(window).width();
	var heightDevice = $(window).height();

	//$('#sobre').css('height', heightDevice);
	//if(widthDevice < "1020"){
	//	$('#sobre').css('height', 'auto');
	//}
});

//SLIDE TO CONTACT FORM
$(function(){
	$('.contact-form').click(function(){
		$('.sobre > article').css('left','-50%');
	});
	$('.back-form').click(function(){
		$('.sobre > article').css('left','50%');
	});
});

//CLICK MENU MOBILE
$(function(){

	$('.menu-mobile').click(function(e) {
		e.stopPropagation();
		toggleNav();
	});

	$('#main').click(function(e){
		var target = $(e.target);
		if(!target.closest('#nav').length && $('#nav').hasClass('navMobile')) toggleNav();
	});

	function toggleNav(){
		if($('#nav').hasClass('navMobile')){
			$('#nav').removeClass('navMobile');
		}else{
			$('#nav').addClass('navMobile');
		}
	}

});



//SCROLL DOWN PAGE
$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-70
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
});

//SCROLL MENU FIXED
$(function(){
	var posicaoInicial = $('.menu').position().top;

	$(document).scroll(function () {
    	var posicaoScroll = $(document).scrollTop();

    	if (posicaoScroll > '170') {
				$('.menu').addClass('menuBG');
    	}
    	if (posicaoScroll < '170') {
				$('.menu').removeClass('menuBG');
    	}
	});
});

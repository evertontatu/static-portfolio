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



//SCROLL DOWN PAGE
$(document).ready(function(){
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-0
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
});


//MODAL CONTACT
$(function(){
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
});

//SCROLL MENU FIXED
$(function(){
	var posicaoInicial = $('.homeCenter').position().top;

	$(document).scroll(function () { // oscultador de scroll
    	var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    	console.log(posicaoScroll);
    	if (posicaoScroll > '180') $('.home > div').addClass('menuFixed');
    	if (posicaoScroll < '180') $('.home > div').removeClass('menuFixed');
	})
});

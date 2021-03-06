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

//FORM CONTACT
$(function(){

	$(document).ready(function(){
      /*desabilita o submit do form*/
      $(".contactform").submit(function(){
        return false;
      });
    });

    $(document).ready(function(){
        $('input[type=submit]').click(function(){
            var nome  = $("#inputName").val();
            var email  = $("#inputEmail").val();
            var message  = $("#inputMessage").val();
            var    er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

            if( nome==''){
            } else if(email==''){
            } else if(message==''){

            }else{
            $(".loading").css("display","block");
                $.ajax({
                    type:'POST',
                    url:'submit.php',
                    data:{
                        nome:nome,
                        email:email,
                        message:message
                    },
                    success:function(data){
                        $(".loading").css("display","none");
                        $(".envioForm").css("display","block");
                        $(".contactform")[0].reset();
                        //    $(".modal-body span").addClass("formEnviado");
                        //    enviado();
                    }, error:function(){

                    }
                });
            }
        });
    });

});

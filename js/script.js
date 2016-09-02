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

	$(document).scroll(function () {
    	var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
    	if (posicaoScroll > '170') {
				$('.menu').addClass('menuBG','menuHeigth');
				$('.logoMenu').addClass('menuHeigth');
    	}
    	if (posicaoScroll < '170') {
				$('.menu').removeClass('menuBG');
				$('.logoMenu').removeClass('menuHeigth');
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
            var telefone  = $("#inputTelefone").val();
            var email  = $("#inputEmail").val();
            var message  = $("#inputMessage").val();
            var    er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

            if( nome==''){
            } else if( telefone==''){
            } else if(email==''){
            } else if(message==''){

            }else{
            $(".loading").css("display","block");
                $.ajax({
                    type:'POST',
                    url:'submit.php',
                    data:{
                        nome:nome,
                        telefone:telefone,
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

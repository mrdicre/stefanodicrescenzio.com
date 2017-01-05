$(function() {

	// HEIGHT

	var fullHeight = $(window).height();

	$('.full').css({'height': fullHeight + 'px'});

	$('').css({'line-height': fullHeight + 'px'});

	$(window).resize(function() {

		var fullheight = $(window).height();

		$('.full').css({'height': fullHeight + 'px'});

		$('').css({'line-height': fullHeight + 'px'});

	});

	// NAVBAR

    $(".hamburger").click(function(){

        $("#navbar-content").fadeToggle(200);

        $(this).toggleClass('btn-open').toggleClass('btn-close');
        
        $('body').toggleClass('noscroll');

    });

    $('#navbar-content').on('click', function(){

        $("#navbar-content").fadeToggle(200);

        $(".hamburger").toggleClass('btn-open').toggleClass('btn-close');

        open = false;

    });

});
$(function() {

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
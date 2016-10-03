$(function() {

	// FULL HEIGHT

	var fullHeight = $(window).height();

	$('.full').css({'height': fullHeight + 'px'});

	$('').css({'line-height': fullHeight + 'px'});

	$(window).resize(function() {

		var fullheight = $(window).height();

		$('.full').css({'height': fullHeight + 'px'});

		$('').css({'line-height': fullHeight + 'px'});

	});

	// HALF HEIGHT

	var halfHeight = $(window).height() / 2;

	$('.half').css({'height': halfHeight + 'px'});

	$(window).resize(function() {

		if (!resize) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(init, 300) : window.requestAnimationFrame(init);
		}

		var halfHeight = $(window).height() / 2;

		$('.half').css({'height': halfHeight + 'px'});

		$('').css({'line-height': halfHeight + 'px'});

	});

	// NAVBAR

	$('.js-trigger').on('click', function() {

		$('.js-icon').toggleClass('is-clicked');

		// $('.js-header').toggleClass('menu-is-open');

		if ($('.js-nav').hasClass('is-visible')) {
			event.preventDefault();
			transitionLayer.addClass('closing');
			transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
				transitionLayer.removeClass('closing opening visible');
				transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
			});

			$('.js-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

				$('body').removeClass('overflow-hidden');

			});

		} else {
			event.preventDefault();
			transitionLayer.addClass('visible opening');
			var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 250;
			setTimeout(function() {
				$('.js-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

					$('body').addClass('overflow-hidden');
				});
			}, delay);

		}

	});

	// TRANSITION

	var transitionLayer = $('.cd-transition-layer');
	var transitionBackground = transitionLayer.children();

	var frameProportion = 1.78;
	var frames = 25;
	var resize = false;

	function init() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			unitHeight, unitWidth;

		if (windowWidth / windowHeight > frameProportion) {
			unitWidth = windowWidth;
			unitHeight = unitWidth / frameProportion;
		} else {
			unitHeight = windowHeight * 1.2;
			unitWidth = unitHeight * frameProportion;
		}

		transitionBackground.css({
			'width': unitWidth * frames + 'px',
			'height': unitHeight + 'px'
		});
		resize = false;
	}

	init();

});
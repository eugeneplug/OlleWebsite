$(document).ready(() => {
	$('.header-burger').click(() => $('.header-menu').toggleClass('active'));
	
	$('.sliderItem').click(() => $('.header_popup').toggleClass('active'));
	
	$('.header_popup_text_clouse').click(() => $('.header_popup').toggleClass('active'));
	});


	
	
	$(document).ready(function($) {
		// общие настройки для всех popup окон
		$('.popup-close').click(function() {
		  $(this).parents('.popUpDark').fadeOut();
		  return false;
		});
	  
		$(document).keydown(function(e) {
		  if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popUpDark').fadeOut();
		  }
		});
	  
		// настройки для popup окна со слайдером
		$('.sliderItem').click(function() {
		  $('.popUpDark').fadeIn();
		  return false;
		});
	  
		// настройки для popup окна обратной связи
		$('.callback_popup_clouse').click(function() {
		  $(this).parents('.popup-darkzone').fadeOut();
		  return false;
		});
	  
		$('.call').click(function() {
		  $('.popup-darkzone').fadeIn();
		  return false;
		});
	  
		// закрыть попап при клике за его пределами
		$('.popUpDark').click(function(e) {
		  if (!$(e.target).closest('.popUpDark').length) {
			$(this).fadeOut();
		  }
		});
	
	  });
	  
	
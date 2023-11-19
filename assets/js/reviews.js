
$(document).ready(() => {
	$('.header-burger').click(() => $('.header-menu').toggleClass('active'));
	
	$('.sliderItem').click(() => $('.header_popup').toggleClass('active'));
	
	$('.header_popup_text_clouse').click(() => $('.header_popup').toggleClass('active'));
	});

$(document).ready(function() {
	// Обработчик клика по ссылке "Закрыть"
	$('.callback_popup_clouse').click(function() {
		$(this).parents('.callback_popup_fade').fadeOut();
		return false;
	});

	// Обработчик закрытия окна по клавише Esc
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.callback_popup_fade').fadeOut();
		}
	});

	// Обработчик клика по фону, но не по окну
	$('.callback_popup_fade').click(function(e) {
		if ($(e.target).closest('.callback_popup').length == 0) {
			$(this).fadeOut();
		}
	});

	// Обработчик клика по кнопке вызова окна
	$('.call').click(function() {
		$('.callback_popup_fade').fadeIn();
		return false;
	});
});

// 







$(document).ready(function($) {
	// Клик по ссылке "Закрыть"
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

$(document).ready(function($) {
	$('.features-block').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

// popup callback

$(document).ready(function($) {
	// Клик по ссылке "Закрыть".
	$('.callback_popup_clouse').click(function() {
		$(this).parents('.callback_popup_fade').fadeOut();
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.callback_popup_fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.callback_popup_fade').click(function(e) {
		if ($(e.target).closest('.callback_popup').length == 0) {
			$(this).fadeOut();					
		}
	});	
});

$(document).ready(function($) {
	$('.call').click(function() {
		$('.callback_popup_fade').fadeIn();
		return false;
	});	
	
	$('.callback_popup_clouse').click(function() {
		$(this).parents('.callback_popup_fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.callback_popup_fade').fadeOut();
		}
	});
	
	$('.callback_popup_fade').click(function(e) {
		if ($(e.target).closest('.callback_popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
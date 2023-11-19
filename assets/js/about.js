
$(document).ready(function() {
  $('.call').click(function() {
    $('.callback_popup_fade').addClass('active');
  });

  $('.callback_popup_clouse, .callback_popup_fade').click(function(e) {
    if ($(e.target).hasClass('callback_popup_fade') || $(e.target).hasClass('callback_popup_clouse')) {
      $('.callback_popup_fade').removeClass('active');
    }
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") { // Escape key
      $('.callback_popup_fade').removeClass('active');
    }
  });

  $(document).mouseup(function(e) {
    var container = $(".callback_popup_redbox");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.callback_popup_fade').removeClass('active');
    }
  });
});


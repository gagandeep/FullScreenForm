(function ( $ ) {

	var fullscreen = function(options) {
		var settings = $.extend({
            // These are the defaults.
            'color': "#ffffff",
            'background-color': "#111111"
        }, options );

		$(this).addClass('fullscreen-form').css(settings);
		$(".fullscreen-form > *").addClass('deactivate');
		var active = $(".fullscreen-form >*:first-child").removeClass('deactivate').addClass('active animated slideInRight');

		if (!active.is(':last-child') && active.data('show-next')!==false){
			active.append('<div class="next clearfix"><div class="pull-right"><small>Press Enter or <button class="btn btn-sm">Next</button><small></div></div>');
		}
		$.extend({
			gotonext : function(){
				var active = $(".fullscreen-form .active");
				if (active.find('input, textarea, select').valid() ){
					var current = active.next();
					current.removeClass('deactivate').addClass('active animated slideInRight');
					active.removeClass('active animated slideInRight').addClass('deactivate');
					var next = active.find('.next');
					if (next) {
						next.remove();
					}
					if (!current.is(':nth-last-child(2)') && current.data('show-next')!==false){
						$(".fullscreen-form .active").append('<div class="next clearfix" style="padding-top:10px;"><div class="pull-right"><small>Press Enter or <button class="btn btn-sm">Next</button><small></div></div>');
					} else if(current.is(':nth-last-child(2)')) {
						var last = current.next();
						last.removeClass('deactivate').addClass('active animated slideInRight');
					}
					var focus = current.find('input:visible:first, textarea:visible:first');
					if (focus && !focus.hasClass('select2-search__field')){
						focus.focus();
					}
				}
			}
		});
		$(".fullscreen-form").on('click', '.active .next button', function(e){
			e.preventDefault();
			$.gotonext();
		});
		return this;
	}

	$.fn.extend({fullScreenForm:fullscreen});

}( jQuery ));

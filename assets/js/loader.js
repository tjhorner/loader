Loader = (function(){
	var loader = {
		show: function(){
			$('.loader .check').removeClass('checked');
			$('.loader .error').removeClass('errored');
			$('.loader').fadeIn();
			$('.loader svg').fadeIn();
		},
		done: function(){
			$('.loader svg').fadeOut('fast', function(){
				$('.loader .check').addClass('checked');
				setTimeout(function(){
					$('.loader').fadeOut();
				}, 500);
			});
		},
		error: function(){
			$('.loader svg').fadeOut('fast', function(){
				$('.loader .error').addClass('errored');
				setTimeout(function(){
					$('.loader').fadeOut();
				}, 500);
			});
		}
	};

	return loader;
}());
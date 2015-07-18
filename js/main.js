jQuery(document).ready(function($) {
	$('#ipad-wrapper').hide();

	$('#switch-tablet').click(function(){
		$('#iphone').animate({top: '-900'}, 500);
		$('#iphone-shadow').animate({top: '900'}, 500);
		$('#iphone-info').animate({left: '-900'}, 500, function(){
			$('#iphone-wrapper').hide();
			$('#ipad-wrapper').show();
			$('#ipad-shadow').animate({top: '-240px'}, 500);
			$('#ipad').animate({top: '0'}, 500);
			$('#ipad-info').animate({left: '0'}, 500);
		});
	});

	$('#switch-phone').click(function(){
		$('#ipad').animate({top: '-1500'}, 700);
		$('#ipad-shadow').animate({top: '900'}, 700);
		$('#ipad-info').animate({left: '-900'}, 700, function(){
			$('#ipad-wrapper').hide();
			$('#iphone-wrapper').show();
			$('#iphone-shadow').animate({top: '-120px'}, 500);
			$('#iphone').animate({top: '0'}, 500);
			$('#iphone-info').animate({left: '0'}, 500);
		});
	});

	if($.client.os == "Mac"){
		$('#iphone iframe').css({
			width: '320px'
		});

		$('#ipad iframe').css({
			width: '768px'
		});
	}

});



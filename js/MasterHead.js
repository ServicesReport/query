$(function(){

// Default-Click
	$('.master_head .right .top .default').click(function(){
		$('.master_head .right .top .click').hide();
		$(this).next('.click').fadeIn();
	});
	$('.master_head .right .top .click .close').click(function(){
		$(this).parent().hide();
	});

// SlideMenu

// $('.master_head .right .menu li').eq(1).find('.sub_menu').show();

	var Menuli = $('.master_head .right .menu li');
	var SubMenu = Menuli.find('.sub_menu');
	

	Menuli.each(function(){
		var MenuLeft = $(this).find('.sub_menu').find('.left');	
		var SubMenuH = $(this).find('.sub_menu').outerHeight(true);
		MenuLeft.css('height',SubMenuH);
	});
	

	Menuli.hover(function() {
		$(this).find('.sub_menu').stop(true,true).fadeIn();
		$(this).find('.arrow').stop(true,true).fadeIn();
	}, function() {
		$(this).find('.sub_menu').stop(true,true).hide();
		$(this).find('.arrow').stop(true,true).hide();
	});



});
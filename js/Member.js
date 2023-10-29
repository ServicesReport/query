$(function(){

// Password
	$('.member_box .con .password .show').click(function(){
		$(this).hide();
		$(this).next().focus();
	});
	$('.member_box .con .password .show').focus(function(){
		$(this).hide();
		$(this).next().focus();
	});
	$('.member_box .con .password .hidden').blur(function() {
		if($(this).val()==''){
			$(this).prev().show();
		}
	});


	var Log = $('.master_head .right .top .log');
	var Reg = $('.master_head .right .top .reg');
	var Member = $('.member_box');
	var logBox = Member.find('.login');
	var regBox = Member.find('.register');
	var FindPass = Member.find('.find_pass');
	var changePass = Member.find('.change_pass');
	var MemberBox = Member.find('ul li');	
	var close = Member.find('.close');

	close.click(function(){
		Member.fadeOut();
		MemberBox.fadeOut();
	});

	Log.click(function(){
		Member.fadeIn();
		logBox.fadeIn();
	});
	Reg.click(function(){
		Member.fadeIn();
		regBox.fadeIn();
	});

	$('.member_box .con .login .form .remember .forget').click(function(){
		MemberBox.hide();
		FindPass.fadeIn();
	});

//	$('.member_box .con .find_pass .submit').click(function(){
//		MemberBox.hide();
//		changePass.fadeIn();
//	});

	$('.member_box .con .login .form .no_name span').click(function(){
		MemberBox.hide();
		regBox.fadeIn();
	});

	$('.master_head .right .top .already_login').hover(function() {
		$(this).find('.hover').stop(true,true).fadeIn();
	}, function() {
		$(this).find('.hover').stop(true,true).fadeOut();
	});

	$('.master_head .right .top .already_login .hover .change').click(function(){
		Member.fadeIn();
		MemberBox.hide();
		changePass.fadeIn();
	});


});
$(".main4 .tab-title li").click(function(){
		$(this).addClass('on2').siblings().removeClass('on2');
		var index=$(this).index()+1;
		$('.tab-content-'+index).show().siblings('.tab-content').hide();
	})
$(".about-tab li").click(function(){
		$(this).addClass('on2').siblings().removeClass('on2');
		var index=$(this).index()+1;
		$('.about-tab-content-'+index).show().siblings('.about-tab-content').hide();
	})
$('.cpf-left ul li').hover(function(){
		var index_b=$(this).index()+1;
		$(this).addClass('on').siblings().removeClass('on');
		$('.cpf-content-'+index_b).show().siblings('.cpf-content').hide();
	})
$('.main2_title>span').hover(function(){
		var index_c=$(this).index();
		$(this).addClass('on3').siblings().removeClass('on3');
		$('.nr_'+index_c).show().siblings('div').hide();
	})

$('.tab-content-3 ul li').click(function(){
	window.location.href="/shebei.html";
})
$('.tab-content-1 img').click(function(){
	window.location.href="/zizhi.html";
})
var url = window.location.pathname;
if(url=='/'){
	$('.nav>ul>li').eq(0).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(0).addClass('hover').siblings().removeClass('hover');
}
else if(url=='/contact.html'){
	$('.nav>ul>li').eq(6).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(6).addClass('hover').siblings().removeClass('hover');
}
else if(url=='/news/faq/' || url=='/zhichi.html'){
	$('.nav>ul>li').eq(5).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(5).addClass('hover').siblings().removeClass('hover');
}
else if(url.indexOf('/news/')!=-1){
	$('.nav>ul>li').eq(3).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(3).addClass('hover').siblings().removeClass('hover');
}
else if(url.indexOf('/jiance/')!=-1){
	$('.nav>ul>li').eq(2).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(2).addClass('hover').siblings().removeClass('hover');
}
else if(url.indexOf('/anli/')!=-1){
	$('.nav>ul>li').eq(4).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(4).addClass('hover').siblings().removeClass('hover');
}
else if(url=='/about.html' || url=='/history.html' || url=='/shebei.html' || url=='/zizhi.html' || url=='/keyan.html'){
	$('.nav>ul>li').eq(1).addClass('hover').siblings().removeClass('hover');
	$('.nav1>ul>li').eq(1).addClass('hover').siblings().removeClass('hover');
}
var width=$(window).width();
if (width<=1593){
$('.nav ul').css('max-width','100%');
}
var liwidth=$('.nav ul li').width();
$('.cpf-left').width(liwidth);
$('.cpf-right').width(800-liwidth-1);
$(window).scroll(function(){
  var h=$(window).height();
	 if($(this).scrollTop() > h && width>800){
		$(".l-side").fadeIn();
	 }
	 else{
		$(".l-side").fadeOut();
	 }
  })
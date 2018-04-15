$(function(){
	
	"use strict";
	
	$('.header').height($(window).height());
	
	$(window).resize(function(){
		
			$('.header').height($(window).height());
			
			/*Make paragraph in slider center when resize */
	
	$(".bxslider").each(function(){
		$(this).css("paddingTop",($(window).height()-$(".bxslider li").height())/2);
	});

		
	});
	
	/* links*/
	
	$(".link li").click(function(){
		
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	/*Make paragraph in slider center */
	
	$(".bxslider").each(function(){
		$(this).css("paddingTop",($(window).height()-$(".bxslider li").height())/2);
	});
	
	/*slider */
	
	
	  $('.bxslider').bxSlider();
/*****************/

/* smooth scroll*/

$(".link li a").click(function(){
	
	$("html,body").animate({
		scrollTop:$("#" + $(this).data("value")).offset().top
	},1000);
});
/*****************/
$(".ss li").click(function(){
		
		$(this).addClass("selected").siblings().removeClass("selected");
	});

/* mix it up*/
	$('#Continer').mixItUp
/* scroll*/
$("html").niceScroll({
	cursorcolor:"#1abc9c",
	cursorwidth:"10px",
	cursorborderradius:'0'
});
	
});
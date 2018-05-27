$(document).ready(function(){
	$(".img").mouseover(function(){
		$(this).addClass("trans");
	});
	$(".img").mouseout(function(){
		$(this).removeClass("trans");
	});
});
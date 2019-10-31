$(document).ready(function(){
	$('.skill').each(function(){
		$(this).css('width',+$(this).attr('completed')+'%');
	});
});
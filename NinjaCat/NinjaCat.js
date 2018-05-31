$(document).ready(function(){
	$('img').click(function(){
		var temp = $(this).attr("src");
		var altsrc = $(this).attr("altsrc");
		$(this).attr("altsrc", temp);
		$(this).attr("src", altsrc);
		console.log()
	})
});
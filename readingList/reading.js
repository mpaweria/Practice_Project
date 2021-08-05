$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var reading = $(this).val();
		$(this).val("");
		var item = $("<li><span><i class='far fa-trash-alt'></i></span>" + reading  + "</li>").hide().fadeIn(1000);
		$("ul").append(item);
	}
});

$(".fa-pencil-alt").click(function(){
	$("input").fadeToggle();
});
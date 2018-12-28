//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//create new li and add to ul
		$("ul").append("<li>" + "<span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		//clear text from input
		$(this).val("");
	}
});

$(".fa-edit").click(function(){
	$("input[type=text]").fadeToggle();
});
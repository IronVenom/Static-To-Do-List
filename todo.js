// Check off specific Todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

// Deleting Todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// Stop Event Bubbling
	event.stopPropagation();
});

// Adding Todos when from the input area to the list when enter is pressed.
$("input[type='text']").on("keypress",function(event){
	// 13 is the code for the enter key
	if(event.which === 13){
		// Grab the new task
		var todoText = $(this).val();
		// Clear the input
		$(this).val("");
		// Add the todo
		$("ul").append('<li><span><i class="fas fa-trash-alt"></i></span>' + todoText + "</li>");
	}
});

// Toggling the input
$("#toggle").on("click",function(){
	$("input[type='text']").fadeToggle();
})
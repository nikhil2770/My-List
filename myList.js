//Checking off tasks
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});
//Click on X to remove tasks
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove;
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//saving new Task test to a variable
		var newTask = $(this).val();
		$(this).val("");
		//creating new li and adding it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTask + "</li>")
		
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
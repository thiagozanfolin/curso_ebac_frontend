$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
		var tarefa = $("#tarefa").val();
		if (tarefa !== "") {
			$("#lista-tarefas").append("<li>" + tarefa + "</li>");
			$("#tarefa").val("");
		}
	});

	$("#lista-tarefas").on("click", "li", function() {
		$(this).toggleClass("completed");
	});
});
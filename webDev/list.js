window.setTimeout(function() {
	// put all of your JS code from the lecture here
	var todos = [];
	var input = prompt("What would you like to do?");
	while(input !== "quit") {
		//handle input
		if(input === "list") {
			listTodos();
		}	else if(input === "new") {
			addTodo();
		}	else if(input === "delete"){
			deleteTodo();
		}
		//ask again for new input
		input = prompt("What would you like to do?")
	};
	console.log("Ok, you quit the app.");
	
	function listTodos(){
		console.log("***************")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("***************")
	}
	
	function addTodo(){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Item added")
	}
	
	function deleteTodo(){
		//ask for index of todo to be deleted
		var index = prompt("Enter the number of the todo to delete");
		//delete that todo
		todos.splice(index,1);
		console.log("Item deleted");
	}
}, 500);
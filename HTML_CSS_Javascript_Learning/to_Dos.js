var todos = ["Buy New Turtle"];
window.setTimeout(function() {
    var input = prompt("What would you like to do?")
    while(input !== "quit") {      
        if (input === "list") {
            console.log(todos);
            }
            else if (input === "new") {
                var newToDo = prompt("Enter a new Todo")
                todos.push(newToDo); 
            }
            else if (input === "remove") {
                var remToDo = prompt("What item would you like to remove?")
                todos.pop(remToDo);
            }
            var input = prompt("What would you like to do?")   
    }
    console.log("Okay, You have quit the app!")
    
















  }, 500);
var list = ["Wake up", "Brush teeth"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list") {
        console.log("*********")
        list.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("*********")
    }   
        else if(input === "new"){
            var newItem = prompt("What would you like to add to the list?");
            list.push(newItem);
            console.log(newItem + " has been added to the list.")
    }
        else if (input === "delete"){
            var index = prompt("What number on the index would you like to remove?");
            var rem = list.splice(index, 1);
            console.log(rem + " has been removed from the list.")
        }

    input = prompt("What else would you like to do?")
}
console.log("Okay, you have quit the app");
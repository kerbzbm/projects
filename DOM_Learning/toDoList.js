// variable that selects all list elements in document.
let lis = document.querySelectorAll("li");

//For loop that loops through all list elements, adding an event lisenter the li you mouseover/mouse out, turning the text green/black.
//When clicking an li, an event listener toggles the "done" class which strikes through the text.
for (var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
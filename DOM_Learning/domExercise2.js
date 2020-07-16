// Objective: When button is clicked, change background color of body to purple.

// constant variable that selects button
const btn = document.querySelector("button");
// let variable that defines a boolean
let isPurple = false

// Event listener on btn variable that executes a function on click.
// Function is a loop that checks boolean state, and changes background color based on boolean.
// btn.addEventListener("click",function() {
//     if(isPurple){
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.body.style.backgroundColor = "purple";
//     }
//     isPurple = !isPurple;
// });

// More efficient to use the toggle method with a CSS class.
btn.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});
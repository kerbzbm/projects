// Objective: Come up with four different ways to select the first <p> tag.

// Solution 1:
let first = document.getElementById("first");

// Solution 2:
let special = document.getElementsByClassName("special")[0];

// Solution 3:
let tagFind = document.getElementsByTagName("p")[0];

// Solution 4:
let queryFind = document.querySelector("p");

// Solution 5:
let queryFindAll = document.querySelectorAll("p#first")[0];

// Solution 6:
let queryFindAllNest = document.querySelectorAll("p.special")[0];
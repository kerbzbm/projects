const age = prompt("how old are you?");


if (age < 0) {
    alert("Error, you are negative.")
}

else if (age == 21) {
    alert("happy 21st birthday!!!")
}

else if (!(age%2 === 0)) {
    alert("Your age is odd!")
}

else if (age % Math.sqrt(age) === 0) {
    alert("perfect square!")
}

else {
    alert("Wow! you are "+age+" years old!")
}


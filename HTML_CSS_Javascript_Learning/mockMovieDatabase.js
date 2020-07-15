// Array with nested objects - Mock Movie Database
var movies = [
    {
        name: "Hereditary",
        rating: 5,
        hasWatched: true
    },
    {
        name: "Harry Potter and the Philosopher's Stone",
        rating: 4,
        hasWatched: true
    },
    {
        name: "Gilmore girls",
        rating: 3,
        hasWatched: false
    },
    {
        name: "Jurrasic Park",
        rating: 5,
        hasWatched: true
    },
    {
        name: "The Invisible Man",
        rating: 2,
        hasWatched: false
    }
]

// forEach on the array with an anonymous function that loops through the elements with
// nested objects, checks if hasWatched is true or false, outputs a string in console based on the boolean.
movies.forEach(function(movie){
    var result = "You have ";
     if (movies.hasWatched == true){
        result += "watched ";
     } else {
         result += "not seen ";
     }
     result += "\"" + movies.title + "\" - ";
     result += movie.rating + " stars";
    console.log(result)
})
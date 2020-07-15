// Array
var arr = [1,2,3,4];

// Prints the array in reverse
function printReverse(arr) {
    for (var i = arr.length - 1; i >=0; i--){
        console.log(arr[i]);
    }
}

// Checks if an array you input has elements that match
function isUniform (arr){
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] !== first){
            return false
        }
    }
    return true;
}

// Adds all elements and returns the sum
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total
}
 
// Returns the highest numbered element in the array given
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max
}
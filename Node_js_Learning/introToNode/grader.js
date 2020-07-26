function average(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum += arr[i];
	};
	var avg = sum/arr.length;
	return Math.round(avg);
};

var arr1 = [90, 80, 78, 62, 10, 92, 43];

var arr2 = [95, 10, 5, 2, 15, 44, 1, 0];

var arr3 = [10, 10 , 20, 99, 99, 99, 99];


console.log(average(arr1));

console.log(average(arr2));

console.log(average(arr3));
//Print items in an array in reverse
function printReverse(arr){
	for(i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1,0,80,"hello","yellow"]);


//write a function which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(arr){
	for(i = 1; i < arr.length; i++) {
		//compare each item starting at index 1 with index 0
		if(arr[i] !== arr[0]){
			return false;
		}
		return true;
	}
}

isUniform([1,2,"3",4,5]);


//write a function to return the sum of all the numbers in the Array
function sumArray(arr){
	let sum = 0;
	for(i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

sumArray([2,4,6,24,800]);

//write a function that returns the maximum number in an Array
function max(arr){
	//declare variable to store largest number
	var largestValue = 0;
	//loop through each number in the Array
	for(i = 0; i < arr.length; i++){
		//if the value is larger than largestValue, set largestValue to the array value
		if(arr[i] > largestValue){
			largestValue = arr[i]
		}
	}
	//return the final value of largestValue, the la rgest number in the array
	return largestValue;
}

max([1,3,5,66,2]);
function findLargest(a, b, c) {
  //your code here
	let largestNumber = a;
	if(b > a && b > c){
		largestNumber = b;
	} else if(c > a && c > b){
		largestNumber = c;
	}
   
	return largestNumber;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number.")); 
const num3 = parseInt(prompt("Enter Third Number."));  
alert(findLargest(num1, num2, num3));

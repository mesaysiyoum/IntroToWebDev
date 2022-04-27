let nums = [4, 2, 9, 1, 8];
//let nums = [1, 9, 7, 5, 3];
function divideArray(nums){

 
let evenNums = [];
let oddNums = [];


for (let i = 0; i < nums.length; i++){
	if(nums[i] % 2 == 0){
		evenNums.push(nums[i]);
	}	
}

for (let i = 0; i < nums.length; i++){
	if(nums[i] % 2 !== 0){
		oddNums.push(nums[i]);
	}
}

evenNums.sort(function(a, b) {
   return a - b;
});

oddNums.sort(function(a, b) {
   return a - b;
});

console.log("Even numbers:");
if(evenNums.length == 0){
	   console.log("None");
}
for( i = 0; i < evenNums.length; i++){
	if(evenNums.length > 0){	
		console.log(evenNums[i]);
	} 
}

console.log("Odd numbers:");
 if(oddNums.length == 0){
	console.log("None");
}

for( i = 0; i < oddNums.length; i++){
	if(oddNums.length > 0){
		console.log(oddNums[i]);
	}   
}
}
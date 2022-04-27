function calcWordFrequencies() {
   let input = prompt("type some words");
  let words = input.split(" ");
  
   let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
  //for(let item in wordMap){
	 // console.log(count);
	 
	 //let item = Object.keys(wordMap);
	 //console.log(item);
}

//console.log(words[i] +" " + count);
//console.log(calcWordFrequencies());
  
   
   /* for (let i = 0; i < words.length; i++) {
       let count = 1;
	   for(let j = i+1; j < words.length; j++){
	   if(words[i] === words[j]){
		   count++;
	   }
	   }
	   */
      // let nums = words[i];
	 // if(count > 1 ){
	  // console.log(words[i] +" " + count);
	  // }
       //console.log(nums.length);
	   //console.log(nums.indexOf(nums));
	  // let num = words[i];
	   
	   /**let map1 = {
       words[i]: count,
	   };
	   for (let item in map1){
	   console.log( item + " " + map1[item]);
}	
	   }  
  */

   
   


	   
	//console.log(nums[2]);  
	
//console.log(words[i]);
//console.log(nums.length);

//let temp = words;
//count = temp.count(nums);
//console.log(count);


		


//let myList = Object.keys(map1);
//console.log(myList);
//console.log(myList.length);
//for (let item in map1){
	//console.log(nums);

//}


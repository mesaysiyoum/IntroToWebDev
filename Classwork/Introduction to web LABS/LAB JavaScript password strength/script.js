function isStrongPassword(pass){
	
	if (pass.length >= 8){
		return true;
	}
	else if (pass.length < 8){
		return false;
	}
	
	
	for(let i =0; i < pass.length; i++){
	   let char = pass.charCodeAt(i);
	   if (char < 65 && char > 90){
		   return true;
	   }
	 }
	 
	 if(pass.toLowerCase().indexOf("password") == -1){
		return true;
	}
	else{
	   false;
	}
	
}


  

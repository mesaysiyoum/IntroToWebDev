function validateForm(event) {
   let myForm = document.querySelector("#myForm");

   myForm.Name.style.backgroundColor = "LightGreen";
   myForm.email.style.backgroundColor = "LightGreen";
   myForm.phone.style.backgroundColor = "LightGreen";

   // Replace false with an expression that checks whether myForm.screenName.value is empty.
   if (!myForm.Name.value  ) {
      myForm.Name.style.backgroundColor = "Orange";
   } 
}
let myForm = document.querySelector("#myForm");
myForm.validate.addEventListener("send", validateForm);
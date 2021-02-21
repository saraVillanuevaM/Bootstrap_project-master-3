









///validation search///

function myFunction () {
  
  let x = document.getElementById("id1").value;
  let y= x.length;
  let z=3;
  
  
    if(y <= z ){
      search.searchbox.setCustomValidity ("Please enter more than three letters ");
    } else{
      search.searchbox.setCustomValidity('');
    }
   
    }
  


///validation password///

let password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


////////////////////////////////////////////////////Validacion registro//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form1) {
      form1.addEventListener('submit', function (event) {
        if (!form1.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form1.classList.add('was-validated')
      }, false)
    })
})()




/////////////empty field registro form////////



const form = document.getElementById('myFormId');

function registerValidate() {
	var acumErrores = 0;
	
	form.classList.remove('is-invalid');
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail = document.getElementById('inputEmail');
	
	var inputPassword = document.forms["myForm"]["password"];
	var inputProvince = document.forms["myForm"]["inputProvince"];
	var inputUser = document.forms["myForm"]["inputUser"];
	var gridCheck = document.forms["myForm"]["gridCheck"];

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Please fill the field";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Verifies that the mail is in a valid format";
		acumErrores ++;
	}

    if(inputPassword.value == "") {
	  password.classList.add("is-invalid");
		document.getElementById("errorpass").textContent = "Please fill the field";
		acumErrores ++;
	}

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Please fill the field";
		acumErrores ++;
	}

	
	if(inputUser.value == "" ) {
		inputUser.classList.add("is-invalid");
		document.getElementById("errorUser").textContent = "Please fill the field";
		acumErrores ++;
	}
	
	if(!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		document.getElementById("errorCheck").textContent = "Check the info";
		acumErrores ++;
	}

    if (acumErrores > 0){
        return false;
    }else{
		return true;
	}
}



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}






//////////////////////////////////////sign-it//////////////////////////////////

const form2 = document.getElementById('myFormId2');

function registerValidate2() {
	var acumErrores2 = 0;
	
	
	
	//var inputEmail = document.forms["myForm"]["inputEmail"];

	var inputEmail2 = document.getElementById('inputEmail2');
	
	var inputPassword2 = document.forms["myForm2"]["inputPassword2"];
	

	if(inputEmail2.value == "") {
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "Please fill the field";
        acumErrores2 ++;


    }else if(!validar_email(inputEmail2.value)){
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "Verifies that the mail is in a valid format";
		acumErrores2 ++;
	}

    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Please fill the field";
		acumErrores2 ++;
	}


    if (acumErrores2 > 0){
        return false;
    }else{
		return true;
	}
}





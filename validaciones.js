


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


/////////////////Validacion registro//
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




/////////////empty field////////
 function validate(){

 let datauser = document.getElementById("usernamefield").value;
 let datapass = document.getElementById("password").value;
let data = document.getElementById("exampleInputEmail1").value;


if (data==null || data==""){  
   form1.mail.setCustomValidity("don't let this empty field");  
  
 } else {
  form.mail.add('was-validated');
  }

  
   if (datapass==null || datapass==""){  
    form1.pass.setCustomValidity("don't let this empty field");  
    
  } else {
    form1.pass.add('was-validated');
   }
 
    

    if (datauser==null || datauser==""){  
      form1.user.setCustomValidity("don't let this empty fieldh");  
    
    } else {
      form1.user.add('was-validated');
     }
   
    }  
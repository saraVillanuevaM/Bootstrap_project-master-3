
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
  




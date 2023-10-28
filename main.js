function tchik(){
   
   var youremail=document.getElementById("email").value;
   var yourpass=document.getElementById("pass").value;
   var erorr=document.getElementById("error");



    if(  youremail.indexOf("@")=== -1 || youremail.length < 9){
       erorr.innerHTML= "please Enter valid email";
       return false;
   }else if(isNaN(yourphone) || yourphone.length < 11){
       erorr.innerHTML="please Enter valid phone";
       return false

   }
   else{
       alert("true");
       return true;
    }

}
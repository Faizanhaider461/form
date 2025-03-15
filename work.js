function formv(){
    let a= document.querySelector(".a1").value
    let b= document.querySelector(".a2").value
    let c= document.querySelector(".a3").value
    let d= document.querySelector(".a4").value


    if(a==="" || b==="" || c==="" || d===""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill out all the boxes",
          });
          return false;
        }

    else if(b.length !=11){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter the 11 digits number",
          });
          return false;
        }
        

        else if(c.length <8){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Password shoud be atleast 8 characters long",
              });
              return false;
            }
    
        else if((!/[!@#$%^&*(),.?":{}|<>]/.test(c))){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter atleast one special character",
              });
              return false;
            }
            

        else if(c != d){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter the same password",
              });
              return false;
            }

    else{
        return true;
    }
}

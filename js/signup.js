window.onload = function(){
    console.log("SIGN UP FORM LOADED");
    let password_info_span = document.createElement("span");
    password_info_span.setAttribute("id", "password-match-span");
    let form_main_wrapper = document.getElementById("form-main-wrapper");
    form_main_wrapper.after(password_info_span);
    /**
     * Let's validate that the passwords match.
     */

    document.getElementById("inp_confirm_password").addEventListener("keyup", function(e){
        runPasswordValidation();
        
    });

    document.getElementById("inp_password").addEventListener("keyup", function(e){

        if(!(isConfirmPasswordEmpty())){
            //Confirm Password is not empty.
            //We'll display validation span.
            runPasswordValidation();
        }
        
    });

    function isConfirmPasswordEmpty(){
        if(document.getElementById("inp_confirm_password").value === ""){
            return true;
        }
        return false;
    }

    function runPasswordValidation(){
        let initialPwd = document.getElementById("inp_password").value;
        let confirmPwd = document.getElementById("inp_confirm_password").value;
        if(initialPwd !== confirmPwd){
            //This means password is not matching.
            document.getElementById("password-match-span").innerText = "Passwords do not match!";
            document.getElementById("password-match-span").classList.add("pwd-non-matching");
            document.getElementById("inp_password").classList.add("error");
            document.getElementById("inp_confirm_password").classList.add("error");
        }else{
            //This means passwords match.
            document.getElementById("password-match-span").innerText = "Passwords Matching!";
            document.getElementById("password-match-span").classList.remove("pwd-non-matching");
            document.getElementById("inp_password").classList.remove("error");
            document.getElementById("inp_confirm_password").classList.remove("error");
        }
    }

}

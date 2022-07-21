$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();
    
    var Error=true;
    var password_error=true;
    var confirm_password_error=true;
    
    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation(){
        var username_val=$('#username').val();
        if(username_val.length==''){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty');
            $('#usernamevalidation').css('color', 'red');
            Error=false;
            return false;
    
        }
        else{
            $('#usernamevalidation').hide();
        }
    
        if(username_val.length<4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should be of 4 characters');
            $('#usernamevalidation').css('color', 'red');
            Error=false;
            return false;
    
        }
        else{
            $('#usernamevalidation').hide();
        }
    }
    const email = document.getElementById("email");
  email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
      email.classList.remove("is-invalid");
      emailError = true;
    } else {
      email.classList.add("is-invalid");
      emailError = false;
    }
  });
    $('#password').keyup(function(){
        password_validation();
    });
    function password_validation(){
        var password_val=$('#password').val();
        if(password_val.length==''){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password cannot be empty');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
    
        }
        else{
            $('#passwordvalidation').hide();
        }
    
        if(password_val.length<7){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should be of atleast 7 characters');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
    
        }
        else{
            $('#passwordvalidation').hide();
        }
        var lowerCaseLetters = /[a-z]/g;
        if(!password_val.match(lowerCaseLetters)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain a lowercase letter');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
        var lowerCaseLetters = /[a-z]/g;
        if(!password_val.match(lowerCaseLetters)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain a lowercase letter');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
        var upperCaseLetters = /[A-Z]/g;
        if(!password_val.match(upperCaseLetters)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain an uppercase letter');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
        var numbers = /[0-9]/g;
        if(!password_val.match(numbers)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should contain a number');
            $('#passwordvalidation').css('color', 'red');
            password_error=false;
            return false;
        }
        else{
            $('#passwordvalidation').hide();
        }
    }
    $('#confirmpassword').keyup(function(){
        confirm_password();
    });
    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();
        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color', 'red');
            confirm_password_error=false;
            return false;
        }
        else{
            $('#confirmpasswordvalidation').hide();
        }
    }
    $('#submitvalidation').click(function(){

        username_validation();
        password_validation();
        confirm_password();
        if(Error==true && password_error==true && confirm_password_error==true){
            return true;
        }
        else{
            return false;
        }
    });
    });
/**
 * Created by bubble on 09.04.15.
 */
//var email = document.getElementById("email");
//var password = document.getElementById("password");


var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var validatePassword = function (password){
    if (password.length >= 6){
         return true;
    }
    else{
        return false;
    }
}

//var valid = function (){
//        var message = "E-mail";
//        if (!validateEmail(email.value)){
//            if (email.value === "")
//                message = "Please, input your e-mail";
//            else message = "Incorrect e-mail";
//            email.value = "";
//            email.placeholder = message;
//        } else email.placeholder = "Good email";
//    };

var main = function() {
    var email = document.getElementById("email");
    var  password = document.getElementById("password");
    var submit = document.getElementById("submit");

    email.onblur = function (){
        var message = "E-mail";
        if (!validateEmail(email.value)){
            if (email.value === "")
                message = "Please, input your e-mail";
            else /*message = "Incorrect e-mail";*/
            //email.value = "";
            email.placeholder = message;
            email.style.backgroundImage = "url(https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614338-.svg-512.png)";
            email.style.backgroundSize = "25px 25px";
            email.style.backgroundRepeat = "no-repeat";
            submit.disabled = true;
        } else {
            email.style.background = "none";
            submit.disabled = false;
        }

    };

    password.onblur = function() {
        if (password.value == "") {
            password.placeholder = "Please, input password";
            password.value = "";
            password.style.backgroundImage = "url(https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614338-.svg-512.png)";
            password.style.backgroundSize = "25px 25px";
            password.style.backgroundRepeat = "no-repeat";
            submit.disabled = true;
        } else {
            if (!submit.disabled) {
                password.style.background = "none";
                submit.disabled = false;
            }
        }
    };
};

$(document).ready(function(){

    $("#password").onblur(function(){
        var password = $("password").val();
        var email = $("email").val();

        if(validateEmail(email) && validatePassword(password)){
            $("#background").css({"-webkit-filter" : "grayscale(0%)"});
        }
        else{
            $("#background").css({"-webkit-filter" : "grayscale(100%)"})
        }

    });

    $("#email").onblur(function(){
        var password = $("password").val();
        var email = $("email").val();

        if(validateEmail(email) && validatePassword(password)){
            $("background").css({"-webkit-filter" : "grayscale(0%)"});
            alert("koko1");
        }
        else{
            alert("koko2");
            $("background").css({"-webkit-filter" : "grayscale(100%)"})
        }

    })



});

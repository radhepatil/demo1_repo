function store(){

    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var name=document.getElementById('name');
    var add=document.getElementById('add');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /[0-9]/g;
    var addformat = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;

    if(email.value.length == 0){

        document.getElementById("div1").innerHTML="Please fill in email";
        document.getElementById("div1").style.color="Red";


    }else if(pw.value.length == 0){
        document.getElementById("div2").innerHTML='Please fill in password';
        document.getElementById("div2").style.color="Red";


    }else if(name.value.length > 10){
        document.getElementById("div3").innerHTML="Max of 10";
        document.getElementById("div3").style.color="Red";


    }else if(pw.value.length > 8){
        document.getElementById("div2").innerHTML='Max of 8';
        document.getElementById("div2").style.color="Red";


    }else if(!pw.value.match(numbers)){
        document.getElementById("div2").innerHTML='please add 1 number';
        document.getElementById("div2").style.color="Red";


    }else if(!pw.value.match(upperCaseLetters)){
        document.getElementById("div2").innerHTML='please add 1 uppercase letter';
        document.getElementById("div2").style.color="Red";


    }else if(!pw.value.match(lowerCaseLetters)){
        document.getElementById("div2").innerHTML="'please add 1 lovercase letter'";
        document.getElementById("div2").style.color="Red";

    }
    else if(!email.value.match(mailformat)){
        document.getElementById("div1").innerHTML="Enter a valid email address";
        document.getElementById("div1").style.color="Red";


 }
 else if(!add.value.match(addformat)){
        document.getElementById("div4").innerHTML="Enter a valid address";
        document.getElementById("div4").style.color="Red";


 }


    else {
    const person = {
    email: email.value,
    pw : pw.value,
    name: name.value,
    add: add.value

}

window.localStorage.setItem('users', JSON.stringify(person));
 alert('Your account has been created');
 window.location.href = 'index.html';

}
}


function check(){
    debugger



  var storedEmail = JSON.parse(localStorage.getItem('email'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));

    var loginEmail = document.getElementById('typeEmailX');
    var loginPass = document.getElementById('typePasswordX');


    if(loginEmail.value == storedEmail && loginPass.value == storedPw){
        alert('logged in successfully.');
    }
    else{
        alert('you are not a registerd member,please register your self!');
    }
}



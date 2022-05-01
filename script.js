let form = document.getElementById('form');
let username = document.getElementById('username');
let password = document.getElementById('password');
let count=1;

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validation();
});


function validation(){
    let usernameval = username.value.trim();
    let passwordval = password.value.trim();

    if(usernameval == ""){
    seterror(username,'Username can not be black');
    count=0;
    }
    else if(usernameval.length < 4){
    seterror(username,'Username must be 4 characters');
    count=0;
    }
    else{
    setsuccess(username);
    count=1;
    }


    if(passwordval == ""){
    seterror(password,'Password can not be black');
    count=0;}
    else if(passwordval.length < 6){
    seterror(password,'Password must be 6 digits');
    count=0;}
    else{
    setsuccess(password);
    count=1;}

    success();

};


function seterror(input,msg){
    let formpart = input.parentElement;
    let text = formpart.querySelector('p');
    formpart.className = 'formpart error';
    text.innerText = msg;
};

function setsuccess(input){
    let formpart = input.parentElement;
    formpart.className = 'formpart success';
};

function success(){
    if(count)
    swal("Good job!", "You are Loged in!", "success");
    else
    return false;
};
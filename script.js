let checkPassword = () =>{
    const password = document.querySelector('#password');
    const rePassword = document.querySelector('#repassword');

    if(password.textContent === rePassword.textContent){
        return;
    }else{
        password.classList.add('invalid');
        rePassword.classList.add('invalid');
    }
}
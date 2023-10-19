let checkPassword = () =>{
    const password = document.querySelector('#password');
    const rePassword = document.querySelector('#repassword');

    if(password.value == rePassword.value){
        password.style.border = `1px solid #71a148`;
        password.style.borderRadius = `5px`;
        password.style.color = `#5D6063`;
        rePassword.style.border = `1px solid #71a148`;
        rePassword.style.borderRadius = `5px`;
        rePassword.style.color = `#5D6063`;
    }else{
        password.style.border = `1px solid rgb(224,75,75)`;
        password.style.borderRadius = `5px`;
        password.style.color = `rgb(224,75,75)`;
        rePassword.style.border = `1px solid rgb(224,75,75)`;
        rePassword.style.borderRadius = `5px`;
        rePassword.style.color = `rgb(224,75,75)`;
    }
}
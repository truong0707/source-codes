const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const email = $("input[name='email']")
const password = $("input[name='password']")
const btnLogin = $('.btn-login');
const messageEmail = $(".message-email")
const messagePassword = $(".message-password")
const btnEye = $('.btn-eye');
const passwordHidden = $(".password")

email.onblur = (e) => {
    console.log(e.target.value)
    if (!e.target.value) {
        messageEmail.innerHTML = 'Bạn chưa nhập email'
    } else {
        messageEmail.innerHTML = ''
    }
}
email.oninput = () => {
    messageEmail.innerHTML = ''
}
password.onblur = (e) => {
    console.log(e.target.value)
    if (!e.target.value) {
        messagePassword.innerHTML = 'Bạn chưa nhập password'
    }
}
password.oninput = () => {
    messagePassword.innerHTML = ''
}


let hidden = false
btnEye.onclick = () => {
    hidden = !hidden
    if (hidden) {
        passwordHidden.classList.add('password-hidden')
        password.type = 'text'
    } else {
        passwordHidden.classList.remove('password-hidden')
        password.type = 'password'
    }
}
btnLogin.onclick = () => {
    console.log('alo')
}
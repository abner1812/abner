var btnCadastro = document.querySelector('.botao-convite-cadastro')
var btnLogin = document.querySelector('.botao-convite-login')
var container = document.querySelector('.mainContent')
btnCadastro.addEventListener('click', mostrarCadastro)
btnLogin.addEventListener('click', mostrarLogin)
function mostrarLogin() {
    container.classList.remove('active')
}
function mostrarCadastro() {
    container.classList.add('active')
}
var btnCadastro = document.querySelector('.botao-convite-cadastro')
var btnLogin = document.querySelector('.botao-convite-login')
var container = document.querySelector('.mainContent')
btnCadastro.addEventListener('click', mostrarCadastro)
btnLogin.addEventListener('click', mostrarLogin)
function mostrarLogin() {
    container.classList.remove('active')
    container.classList.add('unactive')
}
function mostrarCadastro() {
    container.classList.add('active')
    container.classList.remove('unactive')
}

var darkmode = localStorage.getItem('darkmode')
var btnDark = document.querySelector('.botaoDark')
if (darkmode=='active'){
    document.body.classList.add('darkmode')
} 
btnDark.addEventListener('click', modoEscuro)
function ativarModoEscuro() {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
function desativarModoEscuro() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}
function modoEscuro() {
    // document.body.classList.toggle('darkmode')
    darkmode = localStorage.getItem('darkmode')
    darkmode == 'active' ? desativarModoEscuro() : ativarModoEscuro()
}

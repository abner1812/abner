//Animação de mudança de form
/*var btnMsg1 = document.querySelector('.botao-mensagem1')
var btnMsg2 = document.querySelector('.botao-mensagem2')
var container = document.querySelector('.mainContent')
var alternar = localStorage.getItem('toggle')
if (alternar=='ativo') {
    container.classList.add('active')
    container.classList.remove('unactive')
}
btnMsg1.addEventListener('click', mostrarForm1)
btnMsg2.addEventListener('click', mostrarForm2)
function mostrarForm1() {
    container.classList.remove('active')
    container.classList.add('unactive')
    localStorage.setItem('toggle', null)
}
function mostrarForm2() {
    container.classList.add('active')
    container.classList.remove('unactive')
    localStorage.setItem('toggle', 'ativo')
}*/
var btnMsg2 = document.querySelector('.botao-mensagem2')
btnMsg2.addEventListener('click', ()=>{
    cep.focus()
})

//Modo Escuro
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

//CEP
const cep = document.querySelector('.cep')
const endereco = document.querySelector('.endereco')
const estado = document.querySelector('.estado')
const cidade = document.querySelector('.cidade')
const bairro = document.querySelector('.bairro')
const divCep = document.querySelector('.divCep')

cep.addEventListener('focusout', async ()=>{
    try {
        const onlyNumbers = /^[0-9]+$/
        const cepValid = /^[0-9]{8}$/

        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)) {
            throw {cep_error:'Cep Invalids'}
        }

        const resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        if(!resposta.ok) {
            throw await resposta.json()
        }

        const respostaCep = await resposta.json()

        endereco.value = respostaCep.logradouro
        estado.value = respostaCep.uf
        cidade.value = respostaCep.localidade
        bairro.value = respostaCep.bairro
    } catch (error) {
        if (error?.cep_error) {
            const mensagem = document.createElement('span')
            mensagem.classList.add('mensagemErro')
            mensagem.innerHTML = '&#9888; ERRO! CEP Inválido.'
            divCep.appendChild(mensagem)
            setTimeout(() => {
                mensagem.innerHTML = ''
            }, 5000);
        }
    }
})
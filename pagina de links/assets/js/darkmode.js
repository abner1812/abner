let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('botao-dark')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    document.querySelector('.foto-perfil').innerHTML = '<img src="../pagina de links/assets/img/logoaw_fundopreto.webp">'
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    document.querySelector('.foto-perfil').innerHTML = '<img src="../pagina de links/assets/img/logoaw_fundobranco.png">'
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
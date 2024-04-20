
function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')
}

// pegar a tag img
const img = document.querySelector("#aprofile img")


//substituir a img
if(html.classList.contains('light')) {
    //se tiver light mode, adcinionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    img.setAttribute("src", "./assets/avatar.png")
//se tiver sem kight mode, manter a imagem normal
}






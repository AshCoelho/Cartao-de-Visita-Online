
function toggleMode() {
    const html = document.documentElement

    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")


    //substituir a img
    if(html.classList.contains("light")) {
        //se tiver light mode, adcinionar a imagem light
        img.setAttribute("src", "./assets/foto.png")
    } else {
        img.setAttribute("src", "./assets/foto.png")
        //se tiver sem light mode, manter a imagem normal
    }
}





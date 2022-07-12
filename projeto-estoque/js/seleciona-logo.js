
var html = {
    get(element) {
        return document.querySelector(element)
    }

}

export function selecionaImagem(ambiente) {
    const ambienteLogo = html.get(".logo")
    console.log("Ambiente é", ambiente)

    if (ambiente == "GAUSS") {
        ambienteLogo.src = "img/LOGOGAUSS.png"

    } else if (ambiente == "CDG") {
        ambienteLogo.src = "img/LOGOCDG.jpg"

    } else if (ambiente == "SPG") {
        ambienteLogo.src = "img/LOGOSPG.jpg"

    } else { ambienteLogo.src = "img/LOGONSG.jpg" }

}


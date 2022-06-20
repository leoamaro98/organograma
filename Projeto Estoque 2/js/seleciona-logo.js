var html = {
    get(element) {
        return document.querySelector(element)
    }

}

function selecionaImagem() {
    const ambienteLogo = html.get(".logo")

    if (ambienteSelecionado == "GAUSS") {
        ambienteLogo.src = "img/LOGOGAUSS.png"

    } else if (ambienteSelecionado == "CDG") {
        ambienteLogo.src = "img/LOGOCDG.jpg"

    } else if (ambienteSelecionado == "SPG") {
        ambienteLogo.src = "img/LOGOSPG.jpg"

    } else { ambienteLogo.src = "img/LOGONSG.jpg" }

}

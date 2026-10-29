function TrocasProduto() {
    const img = document.getElementById("myImage");
    const nomeProduto = document.getElementById("nomeProduto");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "coxinha.jpg") {
        img.setAttribute("src", "queijo.jpg");
        img.setAttribute("alt", "queijo");
        nomeProduto.textContent = "Bolinha de Queijo";
    } else { //caso contrario, realize o processo inverso
        img.setAttribute("src", "coxinha.jpg")
        img.setAttribute("alt", "coxinha")
        nomeProduto.textContent = "Coxinha";
    }
}
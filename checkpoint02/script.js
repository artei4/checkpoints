let pontuacao1 = 0;
let pontuacao2 = 0;


function adicionarPonto1() {
    pontuacao1++;
    document.getElementById("placarTime1").innerText = pontuacao1;
}

function retirarPonto1() {
    if (pontuacao1 > 0) {
        pontuacao1--;
    }
    document.getElementById("placarTime1").innerText = pontuacao1;
}


function adicionarPonto2() {
    pontuacao2++;
    document.getElementById("placarTime2").innerText = pontuacao2;
}

function retirarPonto2() {
    if (pontuacao2 > 0) {
        pontuacao2--;
    }
    document.getElementById("placarTime2").innerText = pontuacao2;
}
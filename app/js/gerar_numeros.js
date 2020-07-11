function gerar_novos_numeros() {
    let dezenas = parseInt($(".dezena_active").text());
    gerar_numeros(dezenas);
}

// function generate random numbers between 1 and 60
function gerar_numeros(dezenas) {
    let count = dezenas;

    let jogo = [];
    let ehigual;

    while (count > 0) {
        numero = Math.floor(Math.random() * 60) + 1;
        ehigual = false;

        jogo.forEach(function (n) {
            if (numero == n) {
                ehigual = true;
            }
        });

        if (!ehigual) {
            jogo.push(numero);
            count--;
        }


    };


    // ordenar numeros
    jogo.sort((a, b) => a - b);

    exibir_numeros(jogo);
}


function exibir_numeros(jogo) {

    $('#jogo').children().replaceWith("");

    jogo.forEach(function (n) {
        let linha =
            `<div>
            <div class="numbers m-3">${n}</div>
            </div>`;

        $('#jogo').append(linha);

    });

}
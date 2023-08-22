let blocos = document.querySelectorAll(".bloco"); // pegar todos os blocos com a classe
var clique ="";
blocos.forEach(bloco => {
    bloco.addEventListener("click", Marcar);
});

function Marcar(event) {

    const blocoClicado = event.target;

    if (!blocoClicado.textContent.trim() && clique == "" || !blocoClicado.textContent.trim() && clique == "o") {    // Verifica se o bloco está vazio  ->trim tirando os espaços



        blocoClicado.textContent = "X";
        clique = "x"


    }else if( !blocoClicado.textContent.trim() && clique=="x" )
    {


        blocoClicado.textContent = "O";
        clique = "o"

    }
}
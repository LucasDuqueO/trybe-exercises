//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals

let pecaXadrez = "pEAO";



switch(pecaXadrez.toLowerCase()) {
    case "peao":
        console.log("Pode mover-se uma casa a frente.");
        break;
    
    case "torre":
        console.log("Pode mover-se quantas casas quizer na vertical e horizonal.");
        break;

    case "cavalo":
        console.log("Pode mover-se em formato de L, 3 casas na vertical ou horizontal mais uma casa para esquerda/direita/cima/baixo.");
        break;

    case "bispo":
        console.log("Pode mover-se quantas casas quizer em diagonal.");
        break;

    case "rainha":
        console.log("Pode mover-se quantas casas quizer em qualquer direção.");
        break;

    case "rei":
        console.log("Pode mover-se uma casa em qualquer direção.");
        break;

    default:
        console.log("Nome de peça invalida.");
        break;
}
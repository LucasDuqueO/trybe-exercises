//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let x = 30;
let y = 30;
let z = 120;
let trianguloValido;

if(x==0 || y==0 || z==0) {
    console.log("Um ou mais ângulos invalidos!")
}
else if(x+y+z == 180) {
    trianguloValido = true;
}
else {
    trianguloValido = false;
}

console.log(trianguloValido);
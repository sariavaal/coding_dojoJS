//impares del 1 al 20
function impares(){
    for(let i = 1; i <= 20; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
//multiplos de 3
function multiplos3(){
    for(let i = 100; i >= 0; i--){
        if(i % 3 === 0){
            console.log(i);
        }
    }
}
//Imprime la secuencia Usando un bucle, escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.
function secuencia(){
    for(let i = 4; i >= -3.5; i--){
        console.log(i);
    }
}
//Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.
function sigma(){
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
}
//Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.
function factorial(){
    let product = 1;
    for(let i = 1; i <= 12; i++){
        product *= i;
    }
    console.log(product);
}
impares();
multiplos3();
secuencia();
sigma();
factorial();
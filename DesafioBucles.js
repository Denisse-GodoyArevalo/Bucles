//* Desafio 1 imprimir Numeros impares del 1 al 20 *//

for(i=1; i<21; i++) {
    if( i%2===1){
        console.log(i);
    } 
}
console.log("-----");

// Desafio 2 imprimir multiplos de 3 del 100 al 0 #//
for (i = 100; i>= 0; i--) {
    if (i % 3 ===0){
        console.log(i);
    }
}
console.log("-----");

// Desafio 3 imprimir secuencia ##//
for(let i = 4; i>=-3.5; i-=1.5){
    console.log(i)
}
console.log("-----");

// Desafio 4 SIGMA imprimir la suma de numeros del 1 al 100 ##//
sum = 0;
for(i=1; i<=100 ;i++){
    sum = (sum+i);
    console.log(sum);
}
console.log("-----");

// Desafio 5 FACTORIAL imprimir multiplicacion del 1 al 12 ## //
let produc = 1;
for(i=1; i<=12; i++){
    produc= (produc*i);
    console.log(produc);
    
}
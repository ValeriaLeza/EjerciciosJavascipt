//Ejercicio 1 resuelto

let numeros = [3, 5, 7, 1, 6];
/* console.log(numeros);
numeros.sort(function(a, b) {return a - b});
console.log(numeros[numeros.length-1]); */
let mayor = "";
for (let cont = 0; cont < numeros.length; cont++) {
    
   if (numeros[cont]>numeros[cont+1]) {
    mayor=console.log(numeros[cont]);
   }
}

// Ejercicio 1. Determinar si un número es positivo, negativo o cero:
// ● Declara una constante con un número.
// ● Utiliza una estructura if...else if...else para determinar si el número es positivo, negativo o cero.
// ● Muestra un mensaje en la consola indicando el resultado.

// const numero = 0;
// if (numero > 0) {
//     console.log('El número es positivo');
// }
// else if (numero < 0) {
//     console.log('El número es negativo');
// }
// else {
//     console.log('El número es cero');
// }

// Ejercicio 2. Imprimir los números pares del 1 al 20:
// ● Utiliza un bucle for para iterar del 1 al 20.
// ● Dentro del bucle, utiliza una estructura if para verificar si el número actual es par (utiliza el operador %).
// ● Si el número es par, imprímelo en la consola.

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Ejercicio 3. Calcular la suma de los números del 1 al 10:
// ● Declara una variable suma e inicialízala en 0.
// ● Utiliza un bucle for para iterar del 1 al 10.
// ● Dentro del bucle, suma el número actual a la variable suma.
// ● Después del bucle, muestra el valor de suma en la consola.

// const number = 1;
// if(number >= 10){
//    console.log(number + " " + 'is greater than 10 ');
// } else {
// console.log(number + " " + 'is less than 10');
// }

// Ejercicio 4. Verificar si un año es bisiesto:
// ● Pide al usuario que ingrese un año.
// ● Utiliza una estructura if...else para determinar si el año es bisiesto.
// ● Un año es bisiesto si es divisible por 4, excepto si es divisible por 100, salvo que sea divisible por 400.
// ● Muestra un mensaje en la consola indicando si el año es bisiesto o no.

// const year = 2020;
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log('El año es bisiesto');
//         } else {
//             console.log('El año no es bisiesto');
//         }
//     } else {
//         console.log('El año es bisiesto');
//     }
// } else {
//     console.log('El año no es bisiesto');
// }

// Ejercicio 5. Imprimir una tabla de multiplicar:
// ● Pide al usuario que ingrese un número.
// ● Utiliza un bucle for para iterar del 1 al 10.
// ● Dentro del bucle, calcula el producto del número ingresado y el número actual.
// ● Muestra el resultado en la consola en formato de tabla (por ejemplo, "5 x 1 = 5").

// const number = 5;
// for (let i = 1; i <= 10; i++) {
//     let result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
// }

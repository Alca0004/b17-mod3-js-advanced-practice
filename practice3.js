// Ejercicio 1. Calculadora simple:
// Crea una función llamada calculadora que tome tres argumentos: dos números y un operador (+, -, *, /). La función
// debe realizar la operación correspondiente y devolver el resultado

// function calculadora(num1, num2, operador) {
//   switch (operador) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "Operador no válido";
//   }
// }

// Ejercicio 2. Calcular el factorial de un número:
// Crea una función llamada factorial que tome un número entero positivo como argumento y devuelva su factorial.

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }
// console.log(factorial(5));

// Ejercicio 3. Contar vocales en una cadena:
// Crea una función llamada contarVocales que tome una cadena como argumento y devuelva el número de vocales
// que contiene. Para resolverlo utiliza de referencia la siguiente constante:

// const vocales = "aeiouAEIOU";
// function contarVocales(cadena) {
//   let contador = 0;
//   for (let i = 0; i < cadena.length; i++) {
//     if (vocales.includes(cadena[i])) {
//       contador++;
//     }
//   }
//   return contador;
// }
// console.log(contarVocales(vocales));

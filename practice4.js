// Ejercicio 1. Escribe una o varias funciones que generen un array de 10 números aleatorios entre 0 y 100,
// encontrar el número más bajo y el más alto. Finalmente el resultado con estos números deben mostrarse en la
// consola. Recuerda utilizar los principios para escribir código limpio.

// const generateRandomNumbers = (min, max, quantity) => {
//     const randomNumbers = [];
//     for (let i = 0; i < quantity; i++) {
//         randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
//     }
//     return randomNumbers;
// }
// console.log(generateRandomNumbers(0, 100, 10));

// Ejercicio 2. Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición
// que ocupa cada carácter en el abecedario.

// Ejercicio 3. Filtrar números pares:
// Crea un array de números. Utiliza el método filter para crear un nuevo array que contenga solo los números
// pares. Imprime por consola el nuevo array.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// Ejercicio 5. Encontrar el primer número mayor que 3:
// Crea un array de números. Utiliza el método find para encontrar el primer número que sea mayor que 3. Muestra
// el resultado por consola.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const firstNumberGreaterThan3 = numbers.find(number => number > 3);
// console.log(firstNumberGreaterThan3);

// Ejercicio 4. Multiplicar por 2:
// Crea un array de números. Crear un nuevo array donde cada elemento sea el doble del original. Imprime el nuevo
// array en la consola.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubleNumbers = numbers.map(number => number * 2);
// console.log(doubleNumbers);

// Ejercicio 6. Extraer una parte del array:
// Crea un array. Utiliza el método slice para crear un nuevo array que contenga una parte del array original.
// Imprime el nuevo array por consola.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const slicedNumbers = numbers.slice(3, 7);
// console.log(slicedNumbers);

// Escreva um programa para criar uma Collection Array de Objetos do tipo string.
// O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá 
// adicioná-las individualmente no Array. Em seguida, faça o que se pede:
// Mostre na tela todas as cores adicionadas. 
// Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.


// 1 - criar a collection array de objetos do tipo string   ==
// 2 - solitar ao usuário que digite 5 cores via teclado    ==
// 3 - adicionar as cores individualmente no array          ==
// 4 - mostrar na tela todas as cores adicionadas
// 5 - mostrar na tela todas as cores adicionadas, ordenadas em ordem crescente

import leia = require('readline-sync');
//apenas aqui muda, trocando const por import na versão ts. 

const array: Array<string> = new Array<string>(); 

for (let i = 0; i < 5; i++) {
    const cor = leia.question(`Digite a cor ${i + 1}: `);
    array.push(cor);
}

console.log("\nCores adicionadas: " + array);
console.log("\nCores em ordem crescente: " + array.sort());

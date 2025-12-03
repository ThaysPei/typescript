import leia = require('readline-sync')

const set: Set<number> = new Set<number>();

for(let i = 0; i < 10; i++) {
    const numero = leia.questionInt(`Digite o ${i + 1}º número: `)
    set.add(numero)
}

const sortedSet = new Set(Array.from(set).sort((a, b) => a - b));

console.log("Listar dados do Set: ")
console.log(sortedSet)

import entrada = require('readline-sync')

import Stack from './Stack' 

const stck = new Stack<string>()
let opcao: number = 1
let nomeLivro: string = ''

while(opcao != 0) {
    console.log('1 - Adicionar um novo livro na pilha')
    console.log('2 - Listar todos os livros da pilha')
    console.log('3 - Retirar um livro da pilha')
    console.log('0 - O programa deve ser finalizado')
    console.log('Entre com a opção desejada: ')

    opcao = entrada.questionInt()

    switch(opcao) {
        case 1:
            nomeLivro = entrada.question('Digite o nome do livro que deseja adicionar: ')
            stck.push(nomeLivro)
            console.log("Pilha: ")
            stck.printStack()
            console.log("Livro adicionado!")
            break;
        case 2:
            if (stck.isEmpty()) {
                console.log('A pilha está vazia!')
            }
            stck.printStack()
            break;
        case 3:
            if (stck.isEmpty()) {
                console.log('A pilha está vazia!')
                break;
            }
            stck.pop()
            console.log("Um Livro foi retirado da pilha!")
            console.log("Pilha: ")
            stck.printStack()
            break;
        case 0:
            opcao = 0
            break;

        default:
            console.log('Opção inválida! Tente novamente.')
            break
    }
}

console.log('Programa Finalizado!')

// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
// para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa 
// deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia
//  ao tentar retirar (chamar) um cliente da fila.

import leia = require('readline-sync');

import {Queue} from './Queue';

const listaNomes: Queue<string> = new Queue<string>()

let opcao: number;
let nomeCliente: string;

do {
    console.log(`=== Menu de Opções ===  
1 - Adicionar um novo Cliente na fila 
2 - Listar todos os Clientes na fila
3 - Chamar (retirar) uma pessoa da fila
0 - Sair`);
    opcao = leia.questionInt(`\nDigite a opção desejada: `);
    
    switch (opcao) {
        case 1:
            nomeCliente = leia.question(`\nDigite o nome do Cliente: `);
            listaNomes.enqueue(nomeCliente);
            console.log(`\nCliente ${nomeCliente} adicionado à fila.\n`);
            break;
            
        case 2:
            if(!listaNomes.isEmpty()){
                console.log(`\nLista de Clientes na Fila:`);  
                listaNomes.printQueue();
                break;
            } else {
                console.log(`\nA fila está vazia.\n`);
            }
            break;

        case 3:
            if (!listaNomes.isEmpty()) {
                console.log(`\nChamando o próximo cliente...\n`);
                listaNomes.dequeue();
                listaNomes.printQueue();
            } else {
                console.log(`\nA fila está vazia, ninguém para chamar.\n`);
            }
            break;

        case 0:
            break;

        default:
            console.log(`\nOpção inválida! Tente novamente.\n`);
            break;   
    }
} while (opcao !== 0);

console.log(`\nPrograma finalizado!`);
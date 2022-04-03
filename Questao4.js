// Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
// sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let distanciaPercorrida = 500

let diasDeAluguel = 5

let valorPorDia = diasDeAluguel * 60

let valorPorDistancia = 500 * 0.15

let preçoFinal = valorPorDia + valorPorDistancia

console.log(`O valor final a ser pago é de R$ ${preçoFinal}.`)
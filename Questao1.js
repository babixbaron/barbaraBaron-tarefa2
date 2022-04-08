//Solicite o preço de uma mercadoria e o percentual de desconto 20%. 
// Exiba no console o valor do desconto e o preço a pagar.

let preçoMercadoria = 50
let porcentagemDeDesconto = 0.2

let preçoComDesconto = preçoMercadoria * porcentagemDeDesconto

let preçoFinal = preçoMercadoria - preçoComDesconto

console.log('O desconto foi de R$ ' + preçoComDesconto + ' e o valor final a ser pago é de R$ ' + preçoFinal + '.')
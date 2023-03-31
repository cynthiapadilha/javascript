function calcularImovel(metragem,quartos){
let m2 = 3000 
let preco = 0

if (quartos === 1){
    return preco = metragem *m2
}else if (quartos === 2){
    return preco = metragem * (m2 * 1.2)
} else{
    return preco = metragem * (m2 * 1.5)
}
}


let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem , quartos)
console.log (`A casa custa R$ ${preco}`)
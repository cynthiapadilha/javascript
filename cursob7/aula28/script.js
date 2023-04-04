/*let numero = 0 
while (numero <= 100) {
    console.log (`Número: ${numero}`)
    numero++
}*/

/*let frutas = ['Maçã', 'Uva','Banana']

for (let n = 0; n < frutas.length; n++) {
   console.log (frutas[n])
    
}*/

let frutas = [
    {nome: 'Maçã', qt:10},
    {nome: 'Uva', qt: 5},
    {nome:'Banana', qt:6}
]

for (let n in frutas){
    console.log(`Nome: ${frutas[n].nome} - ${frutas[n].qt}`);
}
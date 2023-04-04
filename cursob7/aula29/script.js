let carros = [
    {modelo: 'Fiat', Ano: 2022},
    {modelo: 'BMW', Ano: 2018},
    {modelo: 'Ferrari', Ano: 2020}
]

// Ex. 1
//carros.sort((a,b) => b.Ano - a.Ano);

// Ex. 2 
/*carros.sort((a,b) => {
    if (a.Ano > b.Ano){
        return 1;
    } else if (a.Ano < b.Ano){
        return -1;
    }else {
        return 0;
    }
});*/

//Ex. 03
carros.sort ((a,b) => {
    return a.Ano - b.Ano;
})


console.log (carros);




















/*let ingredientes = ['arroz', 'feijão','cebola', 'macarrão']


console.log (`Total de ingredientes: ${ingredientes.join ( ', ' )}`);

ingredientes [0] = 'Pera';
ingredientes.push('kiwi');

ingredientes.sort();
ingredientes.reverse();

console.log (ingredientes);*/
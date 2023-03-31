let pessoa = {
    nome:'Cy',
    sobrenome:'Padilha',
    idade:30,
    nomeCompleto: function (){
        return `${this.nome}  ${this.sobrenome}`;
    }
}
console.log(pessoa.nomeCompleto())
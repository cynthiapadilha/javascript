function clicar(){
    const area = document.querySelector('#area');/*selecionei o elemento*/
    
    let newUl = document.createElement('ul');

    for (let i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = 'Item Add ' + (i + 1);
        newUl.append(newLi)
    }
    area.after(newUl);


}


function clicou () {
    alert ('Clicou !');

    const ul = document.querySelector('ul')/*aqui selecionei o elemento*/

     const novoBotao = document.createElement('button');
     novoBotao.innerHTML = 'Botão';
    
     ul.before(novoBotao);/*acima criei o elemento e agora adicionei depois do ul por isso devo selecionar ele*/
}

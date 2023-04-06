function clicou(){
    const botao = document.querySelector('.botao')

    
    //console.log (botao.classList);
    botao.classList.add ('roxo');
    
    if (botao.classList.contains('azul')){
        botao.classList.replace ('azul','verde');
       
    }else{
        botao.classList.replace ('verde','azul');
        
    }


}
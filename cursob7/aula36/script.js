// Elementos
    const input = document.querySelector('input')
    const ul = document.querySelector ('ul')

//Função
    function adicionar (a){
        if (a.key === 'Enter'){
            let newLi = document.createElement ('li')
            newLi.innerText = input.value
            ul.appendChild(newLi)

            input.value = ''
        }
    }
//Evento
input.addEventListener('keyup',adicionar);
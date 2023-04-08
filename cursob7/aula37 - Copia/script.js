const ul = document.querySelector('ul')
const input = document.querySelector('input')

function add(){
    let newLi = document.createAttribute('li')
    newLi.innerHTML += 
    ul.appendChild(newLi)
}

input.addEventListener('keyup', add)

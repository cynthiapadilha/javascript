
async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert (`Titulo: ${json[0].title}`)
}

async function inseriu() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })   
let json = await response.json();  
console.log(json);   
}

document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inseriu)
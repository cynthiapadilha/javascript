
function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((json) =>{
        console.log(json[0].title);
    })
    .catch(() =>{
        alert('Deu problema')
    })
}


function inseriu() {
    fetch('https://jsonplaceholder.typicode.com/posts',
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
    .then((response) =>{
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}

document.querySelector('#botao').addEventListener('click', clicou)
document.querySelector('#inserir').addEventListener('click', inseriu)
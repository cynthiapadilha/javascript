
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



document.querySelector('#botao').addEventListener('click', clicou)
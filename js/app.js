
async function usuarios() {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
    return response
}

async function listarUsuarios() {
    const data = await usuarios()
    data.forEach(item => {
        criarElementoLi(item.name)
    });
}

function criarElementoLi(contexto) {
    const elementLi = document.createElement('li')
    elementLi.textContent = contexto
    const listaNaoOrdenada = document.querySelector('ul')
    listaNaoOrdenada.appendChild(elementLi)
}

const button = document.querySelector('button')
button.addEventListener('click', () => listarUsuarios())

async function getURI(uri) {
    const response = fetch(`https://jsonplaceholder.typicode.com/${uri}`)
        .then(response => response.json())
    return response
}

async function listarUsuarios() {
    const data = await usuarios('/users')
    data.forEach(item => {
        criarElementoLi(item.name)
    });
}

async function listarFotografias() {
    const data = await getURI('/photos')
    data.forEach(item => {
        criarImagem(item.thumbnailUrl)
    });
}

function criarElementoLi(contexto) {
    const elementLi = document.createElement('li')
    elementLi.textContent = contexto
    const listaNaoOrdenada = document.querySelector('ul')
    listaNaoOrdenada.appendChild(elementLi)
}

function criarImagem(img) {
    const elementLi = document.createElement('li')
    elementLi.innerHTML = `<img src='${img}'/>`
    const listaNaoOrdenada = document.querySelector('ul')
    listaNaoOrdenada.appendChild(elementLi)
}

const button = document.querySelector('button')
button.addEventListener('click', () => listarFotografias())
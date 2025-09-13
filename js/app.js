
async function buscaCEP(cep) {
    return await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())   
}

const cepInformado = document.querySelector('input')
const buscarLogradouro = document.querySelector('button')

buscarLogradouro.addEventListener('click', () => {
    const viaCep = buscaCEP(64215730)
    
    viaCep.then(resultado => {
        const elementLogradouro = document.querySelector('[data-logradouro]')
        let html = `logradouro: ${resultado.logradouro}`
            html += `<br/>bairro: ${resultado.bairro}`
        elementLogradouro.innerHTML = html
    }) 
})
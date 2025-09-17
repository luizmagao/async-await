

const capturandoTarefa = () => {
    const tarefa = document.getElementById('tarefa')
    const aux = tarefa.value 
    tarefa.value = ''
    return aux
}

const elementoCriarTarefa = (tarefa) => {
    const listaTarefas = document.getElementById('lista-tarefas')
    const elementoButton = document.createElement('button')
    elementoButton.classList.add('list-group-item')
    elementoButton.classList.add('list-group-item-action')
    elementoButton.innerText = tarefa
    listaTarefas.appendChild(elementoButton)
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.classList.add('alerta-sumir')
}


const mostrarAlerta = (frase) => {
    const elementoAlerta = document.getElementById('alerta')
    elementoAlerta.classList.remove('alerta-sumir')
    elementoAlerta.innerText = frase
}

const botaoEnviarTarefa = document.getElementById('butao-enviar-tarefa')
botaoEnviarTarefa.addEventListener('click', (e) => {
    const textoTarefa = capturandoTarefa()
    if(textoTarefa == '') {
        mostrarAlerta('Por favor preencha o campo abaixo')
        return
    }
    elementoCriarTarefa(textoTarefa)
})
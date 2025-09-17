

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
}

const botaoEnviarTarefa = document.getElementById('butao-enviar-tarefa')
botaoEnviarTarefa.addEventListener('click', (e) => {
    const textoTarefa = capturandoTarefa()
    elementoCriarTarefa(textoTarefa)
})
function apagar (id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefaAtualizadas = tarefas.filter( tarefa => tarefa.id != id )
    localStorage.setItem("tarefas", JSON.stringify(tarefaAtualizadas))

    document.querySelector("#"+ id).remove()
}

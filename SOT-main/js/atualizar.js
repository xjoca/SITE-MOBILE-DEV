function inc(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.find( tarefa => tarefa.id)
    let tarefa = tarefas.find( tarefa => tarefa.id = id)
    tarefa.status += 10 
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#" + id + " progress").value += 10
}

function desc(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.find( tarefa => tarefa.id)
    let tarefa = tarefas.find( tarefa => tarefa.id = id)
    tarefa.status -= 10
    if (tarefa.status < 0) tarefa.status = 0 
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    document.querySelector("#" + id + " progress").value -= 10
}
let tarefasDigitadas = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
let botaoTarefas = document.getElementById('criar-tarefa');

function adicionandoTarefas() {
  const tarefa = document.createElement('li');
  tarefa.className = 'tarefa';
  const texto = tarefasDigitadas.value;
  tarefa.innerText = texto;
  listaTarefas.appendChild(tarefa);
  tarefasDigitadas.value = '';
}

botaoTarefas.addEventListener('click', adicionandoTarefas);

window.onload = function init() {
};

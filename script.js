const tarefasDigitadas = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoTarefas = document.getElementById('criar-tarefa');

function adicionandoTarefas() {
  const tarefa = document.createElement('li');
  tarefa.className = 'tarefa';
  const texto = tarefasDigitadas.value;
  tarefa.innerText = texto;
  listaTarefas.appendChild(tarefa);
  tarefasDigitadas.value = '';
}

function changeLiColor(evento) {
  const item = document.querySelectorAll('.tarefa');
  for (let index = 0; index < item.length; index += 1) {
    item[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

listaTarefas.addEventListener('click', changeLiColor);
botaoTarefas.addEventListener('click', adicionandoTarefas);

window.onload = function init() {};

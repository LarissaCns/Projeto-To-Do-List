const tarefasDigitadas = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoTarefas = document.getElementById('criar-tarefa');
const botaoApagarTudo = document.getElementById('apaga-tudo');
const botaoApagaCompletos = document.getElementById('remover-selecionado');

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

function tarefaCompleta(evento) {
  if (evento.target.classList.contains('completed') === true) {
    evento.target.classList.remove('completed');
  } else {
    evento.target.classList.add('completed');
  }
}

function apagaTudo() {
  listaTarefas.innerText = '';
}

function removeCompletos() {
  const feitos = document.querySelectorAll('.completed');
  for (let index = 0; index < feitos.length; index += 1) {
    listaTarefas.removeChild(feitos[index]);
  }
}

function apagaSelecionado() {
  const selecionados = document.querySelectorAll('.selected');
  for (let index = 0; index < selecionados.length; index += 1) {
    listaTarefas.removeChild(selecionados[index]);
  }
}

botaoApagaCompletos.addEventListener('click', apagaSelecionado);
botaoApagaCompletos.addEventListener('click', removeCompletos);
botaoApagarTudo.addEventListener('click', apagaTudo);
listaTarefas.addEventListener('dblclick', tarefaCompleta);
listaTarefas.addEventListener('click', changeLiColor);
botaoTarefas.addEventListener('click', adicionandoTarefas);

window.onload = function init() {};

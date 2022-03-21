const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'toDos';

let toDos = [];

function paintTodo(newTodoObj) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  const btn = document.createElement('i');
  span.innerText = newTodoObj.text;
  btn.className = 'fa-solid fa-xmark';
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
  btn.addEventListener('click', removeTodo);
  span.addEventListener('click', doneToDo);
}

function doneToDo(e) {
  e.target.classList.toggle('done');
}

function removeTodo(e) {
  const li = e.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintTodo(newToDoObj);
  saveTodo();
}

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach((item) => {
    paintTodo(item);
  });
}

toDoForm.addEventListener('submit', handleTodoSubmit);

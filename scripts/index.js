const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const page = document.querySelector('.page');
const createTodoListForm = (...args) => new TodoListForm(...args);
const createTodoListItem = (...args) => new TodoListItem(...args);
const todoList = new TodoList(items, createTodoListForm, createTodoListItem);
todoList.render(page);

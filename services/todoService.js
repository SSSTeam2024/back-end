const todoDao = require('../dao/todoDao');

const createTodo = async (todoData) => {
  return await todoDao.createTodo(todoData);
};

const getTodos = async () => {
  return await todoDao.getTodos();
};

const updateTodo = async (id, updateData) => {
  return await todoDao.updateTodo(id, updateData);
};

const deleteTodo = async (id) => {
  return await todoDao.deleteTodo(id);
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

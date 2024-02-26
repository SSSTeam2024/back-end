const Todo = require('../models/todo');

const createTodo = async (todoData) => {
  return await Todo.create(todoData);
};

const getTodos = async () => {
  return await Todo.find();
};

const updateTodo = async (id, updateData) => {
  return await Todo.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

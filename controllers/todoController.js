const todoService = require('../services/todoService');

const createTodo = async (req, res) => {
  try {
    const { title, description, image_path } = req.body;
   
    const newTodo = await todoService.createTodo({ title, description, image_path });
    res.sendStatus(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const { title, description } = req.body;

    const updatedTodo = await todoService.updateTodo(todoId, { title, description });

    if (!updatedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    const deletedTodo = await todoService.deleteTodo(todoId);

    if (!deletedTodo) {
      return res.status(404).send('Todo not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

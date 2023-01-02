const knex = require('../../../db/connection');

function getAllTodos() {
  return knex('todos')
  .select('*');
}

function getSingleTodos(id) {
    return knex('todos')
    .select('*')
    .where({ id: parseInt(id) });
}

function addTodo(todo) {
    return knex('todos')
    .insert(todo)
    .returning('*');
}

function updateTodo(id, todo) {
    return knex('todos')
    .update(todo)
    .where({ id: parseInt(id) })
    .returning('*');
}
function deleteTodo(id, todo) {
    console.log(typeof id);
    return knex('todo')
    .del()
    .where({ id: parseInt(id) })
    .returning('*');
}

module.exports = {
  getAllTodos,
  getSingleTodos,
  addTodo,
  updateTodo,
  deleteTodo
};

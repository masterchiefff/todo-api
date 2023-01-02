const todoService = {
    insertUser(db, newTodo) {
      return db
        .insert(newTodo)
        .into("todos")
        .returning("*")
        .then(rows => {
          return rows[0];
        });
    }
  };
  
  module.exports = todoService;
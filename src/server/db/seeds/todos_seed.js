exports.seed = (knex, Promise) => {
  return knex('todos').del()
  .then(() => {
    return knex('todos').insert({
      title: 'Create Todo UI with Vue js',
      description: 'finish the ui',
      is_completed: 0,
      priority: 'High'
    });
  })
  .then(() => {
    return knex('todos').insert({
      title: 'Knex schema update',
      description: 'Update Schema',
      is_completed: 0,
      date_start:  '2023-01-02 23:26:14.932113+03',
      priority: 'Medium'
    });
  })
  .then(() => {
    return knex('todos').insert({
      title: 'axios linking',
      description: 'Update date on the ui',
      is_completed: 0,
      date_start:  '2023-01-05 23:26:14.932113+03',
      date_end:  '2023-01-06 07:26:14.932113+03',
      priority: 'Low'
    });
  })
  // .then(() => {
  //   return knex('todos').insert({
  //     title: 'Create the todo backend project',
  //     is_completed: 1,
  //   });
  // })
  // .then(() => {
  //   return knex('todos').insert({
  //     title: 'Connect Frontend and backend todo',
  //     is_completed: 1,
  //   });
  // });
};

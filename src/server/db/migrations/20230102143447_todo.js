exports.up = (knex, Promise) => {
    return knex.schema.createTable('todos', (table) => {
        table.increments();
        table.string('title').notNullable();
        table.integer('is_completed').notNullable();
        table.string('description').notNullable();
        table.datetime('date', { precision: 6 }).defaultTo(knex.fn.now(6))
        table.datetime('date_start', { precision: 6 }).defaultTo(knex.fn.now(6))
        table.datetime('date_end', { precision: 6 })
        table.string('priority').notNullable();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('todos');
};
    
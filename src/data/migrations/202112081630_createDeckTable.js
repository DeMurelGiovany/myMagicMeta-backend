const {tables} = require('..'); // verwijst naar data folder, neemt automatisch index.js
module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.deck, (table) => {
      table.uuid('id')
        .primary();
      
      table.string('name', 255)
        .notNullable();

        table.unique('name', 'idx_deck_name_unique');
    });
  },
  down:  (knex) => {
    return knex.schema.dropTableIfExists(tables.deck)
  },
};
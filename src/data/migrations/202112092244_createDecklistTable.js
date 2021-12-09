const { tables } = require('..'); // verwijst naar data folder, neemt automatisch index.js

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.decklist, (table) => {
      table.uuid('id')
        .primary();

      table.integer('card_1_id')
        .notNullable();
        //repeat for 100 cards :(
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.decklist);
  },
};
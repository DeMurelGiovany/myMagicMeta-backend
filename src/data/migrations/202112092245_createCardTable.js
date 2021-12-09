const { tables } = require('..'); // verwijst naar data folder, neemt automatisch index.js

module.exports = {
  up: async (knex) => {
    await knex.schema.createTable(tables.card, (table) => {
      table.uuid('id') //check scryfall for type of id
        .primary();

      table.string('name', 255)
        .notNullable();

        //mana cost

        //converted mana cost

        //color identity

        //type

        //subtype ?

        //power (null allowed)

        //toughness (null allowed)

        
    });
  },
  down: (knex) => {
    return knex.schema.dropTableIfExists(tables.card);
  },
};
const deckService = require('../service/deck');

const getAllDecks = async (ctx) => {
  ctx.body = await deckService.getAll();
};
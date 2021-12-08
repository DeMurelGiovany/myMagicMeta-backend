const {tables, getKnex} = require('../data/index');

const findByiD = async (id) => {
  const card = await getKnex()(tables.card)
  .where('id', id)
  .first('id', 'name');
  return card;
}
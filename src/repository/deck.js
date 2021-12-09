const {tables, getKnex} = require('../data/index');
const uuid = require('uuid');



const create = async ({id, name, commander, userid, gamesplayed, gameswon, datecreated, dateupdated}) => {
  try{
    const id = uuid.v4();
    await getKnex()(tables.deck)
      .insert({
        id, 
        name, 
        commander, 
        userid, 
        gamesplayed,
        gameswon,
        datecreated,
        dateupdated
      });
    return await findById(id)
  } catch (error) {
    const logger = getChildLogger('decks-repo');
    logger.error('Error in create', {error});
    throw error;
  }
};

const findAll = ({
  limit,
  offset,
}) => {
  return getKnex()(tables.deck)
    .select()
    .limit(limit)
    .offset(offset)
    .orderBy('name', 'ASC');
};

const SELECT_COLUMNS = [
  `${tables.deck}.id`, 
  `${tables.deck}.name`, 
  `${tables.deck}.commander`, 
  `${tables.user}.name as username`,
  `${tables.deck}.userid`, 
  `${tables.deck}.gamesplayed`,
  `${tables.deck}.gameswon`,
  `${tables.deck}.datecreated`,
  `${tables.deck}.dateupdated`
]

const findById = async (id) => {
  const deck = await getKnex()(tables.deck)
    .join(`${tables.user}`, `${tables.user}.id`, '=' `${tables.deck}.userid`)
    .where('id', id)
    .first(SELECT_COLUMNS)

    return deck;
}

const formatDeck = ({user_name, deck_userid, ...rest}) => ({
  ...rest,
  user: {
    id: deck_userid,
    name: user_name,
  },
})

module.exports = {
  findAll,
  findById,
  create,
  formatDeck,
};
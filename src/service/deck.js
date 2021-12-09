const decksRepository = require('../repository/deck');
const uuid = require('uuid');




let {
    DECKS,
    USERS
} = require('../data/mock_data');

const {getLogger} = require('../core/logging');
const logger = getLogger();

const getAll = async (
    limit = 100,
    offset = 0,
) => {
    const data = await decksRepository.findAll({limit, offset});
    return{ data, limit, offset};
};
// const getAll = () => {
//     return {
//         data: DECKS,
//         count: DECKS.length
//     };
// }

const getById = (id) => {
    return DECKS.filter((deck) => deck.id === id)[0];
};

//refactor this to need only username or userID for validation
const create = ({name,commander,user,userId,cards,dateCreated
}) => {
    let existingUser;
    if (user) {
        existingUser = USERS.filter((u) => u.name === user )[0];
        if (!existingUser) {
            logger.error(`There is no user with name ${user}.`);
        }
        else{
            const newDeck = {
                id: uuid.v4(),
                name,
                commander,
                user,
                userId,
                cards,
                dateCreated: dateCreated,
                dateUpdated: null
            };
            DECKS = [...DECKS, newDeck];
            return newDeck;
        }
    }
    else {
    if (userId) {
        existingUser = USERS.filter((user) => user.id === userId )[0];
        if (!existingUser) {
            logger.error(`There is no user with id ${userId}.`);
        }
        
        else{
            const newDeck = {
                id: uuid.v4(),
                name,
                commander,
                user,
                userId,
                cards,
                dateCreated: dateCreated,
                dateUpdated: null
            };
            DECKS = [...DECKS, newDeck];
            return newDeck;
        }
    }
    }


}

const updateById = (id, {name,commander,user,userId,cards,dateCreated,dateUpdated
}) => {
    let existingUser;
    if (userId) {
        existingUser = USERS.filter((user) => user.id === userId);
        if (!existingUser) {
            logger.error(`There is no user with id ${userId}.`);
        }
        DECKS = DECKS.map((deck)=>{
            return deck.id === id ? {
                ...deck,
                name,
                commander,
                user,
                cards,
                dateCreated,
                dateUpdated: dateUpdated
            } : deck;
        });
        return getById(id);
    }
//     if (typeof user === 'string') {
//         user = {
//             id: uuid.v4(),
//             name: name
//         };
    
// }
}

const deleteById = (id) => {
    DECKS = DECKS.filter(deck => deck.id !== id);
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
}

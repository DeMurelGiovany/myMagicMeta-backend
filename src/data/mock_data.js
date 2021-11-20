let DECKS = [{
    id: '3291ad9c-7c5c-44c8-b8d9-ac16144032ef',
    name: 'Varina',
    commander: 'Varina, Lich Queen',
    user: 'Gigi',
    userId: '11d3889d-01f8-444d-924e-f393adde9f6e',
    cards: [
        'Varina, Lich Queen',
        'Anguished Unmaking',
        'Snow-Covered Swamp',
        'Snow-Covered Swamp',
        'Snow-Covered Swamp',
        'Snow-Covered Swamp',
        'Snow-Covered Swamp',
    ],
    dateCreated: '2021-05-21T12:30:00.000Z',
    dateUpdated: '2021-05-21T12:30:00.000Z',
},
{
    id: '19165ed1-b1a1-439e-8260-15f8bd2d34f2',
    name: 'Mimeoplasm',
    commander: 'The Mimeoplasm',
    user: 'Gigi',
    userId: '11d3889d-01f8-444d-924e-f393adde9f6e',
    cards: [
        'The Mimeoplasm',
        'Urban Evolution'
    ],
    dateCreated: '2021-05-21T12:30:00.000Z',
    dateUpdated: '2021-05-21T12:30:00.000Z',
},
{
    id: '6df05abb-f4f4-4159-bdb0-07822a77f237',
    name: 'Codie',
    commander: 'Codie, Vociferous Codex',
    user: 'Sil',
    userId: '1612b255-b9cc-44e3-a7a5-28354e6ff2c3',
    cards: [
        'Codie, Vociferous Codex',
        'Nissa, Who Shakes the World'
    ],
    dateCreated: '2021-05-21T12:30:00.000Z',
    dateUpdated: '2021-05-21T12:30:00.000Z',
},


];

let USERS = [{
    id: '11d3889d-01f8-444d-924e-f393adde9f6e',
    name: 'Gigi',
    decks: [

    ],
    dateJoined: '2021-05-21T12:30:00.000Z'
},
{
    id: '1612b255-b9cc-44e3-a7a5-28354e6ff2c3',
    name: 'Sil',
    decks: [
      
    ],
    dateJoined: '2021-05-21T12:30:00.000Z'
},
];

let GAMES = [{
    id: 'e86f3bd5-1fc1-49ef-8a0c-4dc19d2db34d',
    date: '2021-10-14T12:32:04.534Z',
    players: ['Gigi', 'Sil'],
    decks: ['Varina', 'Codie'],
    winner: 'Sil'

},
{
    id: 'e1bcc8ef-5e2b-4e98-b0e1-be260747a079',
    date: '2021-10-14T14:00:00.534Z',
    players: ['Gigi', 'Sil'],
    decks: ['Varina', 'Codie'],
    winner: 'Gigi'
},
{
    id: '64e8ec7a-1b9e-4643-8b8e-e23b95c1f078',
    date: '2021-11-13T12:24:04.534Z',
    players: ['Gigi', 'Sil'],
    decks: ['Varina', 'Codie'],
    winner: 'Sil'
}
];

module.exports = {DECKS, USERS, GAMES};


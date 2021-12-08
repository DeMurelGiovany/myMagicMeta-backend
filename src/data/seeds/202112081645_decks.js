module.exports = {
  seed: async (knex) => {
    await knex('decks').delete();
    await knex('decks').insert([
      {
        id: '3291ad9c-7c5c-44c8-b8d9-ac16144032ef',
        name: 'Varina',
        commander: 'Varina, Lich Queen',
        user: 'Gigi',
        userId: '11d3889d-01f8-444d-924e-f393adde9f6e',
        gamesplayed: '0',
        gameswon: '0',
        // cards: [
        //     'Varina, Lich Queen',
        //     'Anguished Unmaking',
        //     'Snow-Covered Swamp',
        //     'Snow-Covered Swamp',
        //     'Snow-Covered Swamp',
        //     'Snow-Covered Swamp',
        //     'Snow-Covered Swamp',
        // ],
        dateCreated: '2021-05-21T12:30:00.000Z',
        dateUpdated: '2021-05-21T12:30:00.000Z',
    },
    {
        id: '19165ed1-b1a1-439e-8260-15f8bd2d34f2',
        name: 'Mimeoplasm',
        commander: 'The Mimeoplasm',
        user: 'Gigi',
        userId: '11d3889d-01f8-444d-924e-f393adde9f6e',
        gamesplayed: '0',
        gameswon: '0',
        // cards: [
        //     'The Mimeoplasm',
        //     'Urban Evolution'
        // ],
        dateCreated: '2021-05-21T12:30:00.000Z',
        dateUpdated: '2021-05-21T12:30:00.000Z',
    },
    {
        id: '6df05abb-f4f4-4159-bdb0-07822a77f237',
        name: 'Codie',
        commander: 'Codie, Vociferous Codex',
        user: 'Sil',
        userId: '1612b255-b9cc-44e3-a7a5-28354e6ff2c3',
        gamesplayed: '0',
        gameswon: '0',
        // cards: [
        //     'Codie, Vociferous Codex',
        //     'Nissa, Who Shakes the World'
        // ],
        dateCreated: '2021-05-21T12:30:00.000Z',
        dateUpdated: '2021-05-21T12:30:00.000Z',
    },
    ])
  }
}
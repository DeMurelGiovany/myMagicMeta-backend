const koa = require('koa');
const Router = require('@koa/router');
const config = require('config');
const {
    getLogger
} = require('../core/logging');
const bodyParser = require('koa-bodyparser');
const koaCors = require('@koa/router');
const {
    initializeData
} = require('./data')


const NODE_ENV = config.get('env');
const CORSE_ORIGINS = config.get('cors.origins');
const CORS_MAX_AGE = config.get('cors.naxAge');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');
const deckService = require('./service/deck');





async function main() {
    console.log(`log level ${LOG_LEVEL}, logs enabled: ${LOG_DISABLED !== true}`)


    const logger = getLogger();

    await initializeData();

    const app = new koa();

    app.use(
        koaCors({
            origin: (ctx) => {
                if (CORSE_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
                    return ctx.request.header.origin;
                }
                //not valid from  here
                return CORSE_ORIGINS[0];
            },
            allowHeaders: ['Accept', 'Content-type', 'Authorization'],
            maxAge: CORS_MAX_AGE,
        })
    );

    app.use(bodyParser());


    const router = new Router();

    router.get('/api/decks', async (ctx) => {
        logger.info(JSON.stringify(ctx.request));
        ctx.body = deckService.getAll();
    })

    router.post('/api/decks', async (ctx) => {
        const newDeck = deckService.create({
            ...ctx.request.body,
            dateCreated: new Date()
        });
        ctx.body = newDeck;
    })

    router.get('/api/decks/:id', async (ctx) => {
        ctx.body = deckService.getById(ctx.params.id);
    })

    router.delete('/api/decks/:id', async (ctx) => {
        deckService.deleteById(ctx.params.id);
        ctx.status = 204; //no content
    })

    router.put('/api/decks/:id', async (ctx) => {
        ctx.body = deckService.updateById(ctx.params.id, {
            ...ctx.request.body,
            dateUpdated: new Date()
        })
    });

    app.use(router.routes()).use(router.allowedMethods());


    logger.info(`🚀 Server listening on http://localhost:9000`)
    app.listen(9000);

}

main();
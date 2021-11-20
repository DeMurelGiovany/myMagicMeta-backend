const koa = require('koa');
const Router = require('@koa/router');
const config = require('config');
const {getLogger} = require('../core/logging');
const bodyParser = require('koa-bodyparser');


const NODE_ENV = config.get('env');
const LOG_LEVEL = config.get('log.level');
const LOG_DISABLED = config.get('log.disabled');
const deckService = require('./service/deck');

console.log(`log level ${LOG_LEVEL}, logs enabled: ${LOG_DISABLED !== true}`)

const app = new koa();
const logger = getLogger();

app.use(bodyParser());


const router = new Router();

router.get('/api/decks', async (ctx) => {
    logger.info(JSON.stringify(ctx.request));
    ctx.body = deckService.getAll();
})

router.post('/api/decks', async (ctx) => {
    const newDeck = deckService.create({...ctx.request.body, dateCreated: new Date()});
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
    ctx.body = deckService.updateById(ctx.params.id, {...ctx.request.body, dateUpdated: new Date()})
});

app.use(router.routes()).use(router.allowedMethods());


logger.info(`🚀 Server listening on http://localhost:9000`)
app.listen(9000);
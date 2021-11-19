const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    ctx.body = 'Hello World, -> restarting due to changes';
})

app.listen(9000);
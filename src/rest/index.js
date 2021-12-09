const Router = require('@koa/router');
const installDeckRouter = require('./_deck');
const installDecklistRouter = require('./_decklist');
const installCardRouter = require('./_card');
const installUserRouter = require('./_user');

module.exports = (app) => {
	const router = new Router({
		prefix: '/api',
	});

  installDeckRouter(router);
	installDecklistRouter(router);
	installCardRouter(router);
	installUserRouter(router);

	app.use(router.routes()).use(router.allowedMethods());
};
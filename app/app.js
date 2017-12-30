const Koa = require('koa');

const app = new Koa();
const APP_PORT = process.env.APP_PORT || 3000;

if (!module.parent) {
    app.listen(APP_PORT, () => {
        console.log(`App running on port ${APP_PORT}`);
    });
}
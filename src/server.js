const Koa = require('koa');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const indexRoutes = require('./server/routes/index');
const todosRoutes = require('./server/routes/todos.routes')


const app = new Koa();

const PORT = process.env.PORT || 4000;

const router = new Router();

const allowedOrigins = ['http://localhost:5173'];

app.use(cors())
app.use( bodyParser() );

app
.use(router.routes({
    prefix: '/todos'
}))
.use(router.allowedMethods());

app.use(indexRoutes.routes());
app.use(todosRoutes.routes());

const server = app
    .listen( PORT, async () => {
        console.log(`server running on port ${PORT}`);
    } )
    .on ('error', err => {
        console.log(err);
    })

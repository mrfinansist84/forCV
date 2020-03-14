const express = require('express');
const path = require('path')
const expnandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const csrf = require('csurf');
const StoreMongo = require('connect-mongodb-session')(session)
const homeRouter = require('./routes/home');
const addPageRouter = require('./routes/addPage');
const petCardsRouter = require('./routes/petCards');
const cardRouter = require('./routes/card');
const ordersRoutes = require('./routes/orders');
const authRoutes = require('./routes/auth');
const varMiddleware = require('./middleware/variables');
const userMiddleware = require('./middleware/user');

const MONGODB_URL = `mongodb+srv://mrfinansist:Kyore1ZP4lMrJlCC@cluster0-rizbg.mongodb.net/test?retryWrites=true&w=majority`;
const app = express();

const hbs = expnandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs',
});
const store = new StoreMongo({
    collection: 'sessions',
    uri: MONGODB_URL
})


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}))
app.use(session({
    secret: 'some value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(csrf());
app.use(varMiddleware);
app.use(userMiddleware);

app.use('/', homeRouter);
app.use('/add', addPageRouter);
app.use('/petCards', petCardsRouter);
app.use('/card', cardRouter);
app.use('/orders', ordersRoutes);
app.use('/auth', authRoutes);

async function start() {
    try { 
        const PORT = process.env.PORT || 3000;
        await mongoose.connect(MONGODB_URL, {
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => console.log(`server up ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();
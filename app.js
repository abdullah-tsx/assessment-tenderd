require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose");

const notFound = require('./routes/not-found');
const authRouter = require('./routes/auth');
const albumRouter = require('./routes/album');
const marketRouter = require('./routes/market');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/api/v1/', albumRouter);
app.use('/api/v1/', authRouter);
app.use('/api/v1/', marketRouter);

app.use(notFound);


mongoose.connect(process.env.DB_URI);

db = mongoose.connection;

db.on('error', (error) => {
    console.log(error);
});

db.once('open', () => {
    console.log('DB connection established');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

// console.log(routes);

mongoose.connect('mongodb+srv://apollo:sucodefruta@cluster0-jgqw7.mongodb.net/applo_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333);

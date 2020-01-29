const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

// console.log(routes);

mongoose.connect(config, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3333);

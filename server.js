const express = require('express')
require('express-async-errors')
const app = express()
const bodyParser = require('body-parser')
const error = require('./middleware/error.js')
require('dotenv').config()
const cors = require('cors')
const path = __dirname+'/views/';
const corsOptions = {
    origin: '*'
}

process.on('uncaughtException', (ex) => {
    console.log(ex.message);
    process.exit(1);
});

process.on('unhandledRejection', (ex) => {
    console.log(ex.message);
    process.exit(1);
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const addItem = require('./routes/add');
const getAllItems = require('./routes/get');
const deleteItem = require('./routes/delete');
const updateItem = require('./routes/update');

app.use('/api/', addItem);
app.use('/api/', getAllItems);
app.use('/api/', deleteItem);
app.use('/api/', updateItem);
app.use(express.static(path));
app.use(error);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});
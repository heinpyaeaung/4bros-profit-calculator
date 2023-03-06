const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
const path = __dirname+'/views/';
const corsOptions = {
    origin: '*'
}

process.on('uncaughtException', (ex) => {
    console.log('got an uncaught exception error');
    process.exit(1);
});

process.on('unhandledRejection', (ex) => {
    console.log(ex);
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
});
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('express-myconnection');
const mysql = require('mysql');

const config = require('./config/config');

var cors = require('cors');

const api = require('./routes');

const port = 8080;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const conn = connection(mysql, {
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: config.DB_PORT, //port mysql
    database: config.DB_DATABASE,
    socketPath: '/cloudsql/uplifted-kit-257007:europe-west1:sse2019'
}, 'single');


app.use(conn);

app.use(cors());
app.use('/api', api);

app.listen(port, () => console.log(`Listening on port ${port}`));
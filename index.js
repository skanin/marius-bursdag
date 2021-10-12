const express = require('express');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

const defaultRoutes = require('./routes/default.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', defaultRoutes);

var port = process.env.PORT || 3003;

app.listen(port, () => {
	console.log('Up and running!!');
});
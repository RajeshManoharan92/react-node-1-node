const express = require('express')
const cors = require('cors');
const mongo = require('./shared')
const noderouter = require('./router/node')

const app = express();
app.use(express.json());
app.use(cors());
mongo.connect();

app.use('/product',noderouter);

app.listen(process.env.PORT || 3001)
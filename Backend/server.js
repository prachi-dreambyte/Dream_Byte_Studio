require('dotenv').config();

const express = require('express');
var compression = require('compression')
const cors = require('cors');
const app = express();

require('./config/connection.js');

const port = process.env.PORT || 8080;
const routes = require('./routes/routes.js');

app.use(cors({origin:true}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(compression());
app.use('/public', express.static('public', { maxAge: 31536000 }));

app.use('/api',routes);

app.listen(port , ()=>{
    console.log('Server running on port ' + port);
});
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const route = require('./routes/route');

const app_port=process.env.APP_PORT || 8080;

// Tell Express to use EJS as the template engine
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',route);

app.get('/api',(req,res)=>{
    return res.status(200).send('Welcome');
});

app.listen(app_port,()=>{
    console.log(`listening on ${app_port}`);
});


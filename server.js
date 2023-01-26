const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const helmet = require('helmet');
const route = require('./routes/route');

const app_port=process.env.APP_PORT || 8080;

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//increase the HTTP header security usign helmet
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "script-src": ["'self'", "securecoding.com"],
            "style-src": null,
        },
    })
  );
app.use('/api',route);



app.listen(app_port,()=>{
    console.log(`listening on ${app_port}`);
});


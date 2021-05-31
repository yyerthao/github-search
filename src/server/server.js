require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const searchRouter = require('../server/routes/search.router');

/** ---------- MIDDLEWARE ---------- **/

app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/search', searchRouter);



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
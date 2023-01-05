const express = require('express');
const { postuser, getuser, getsingeuser , deleteuser } = require('../Component/User.js');
const app = express.Router();


app.post('/', postuser);
app.get('/',getuser)
app.get('/login/:username', getsingeuser );
app.delete('/drop/:username', deleteuser)

module.exports = app;

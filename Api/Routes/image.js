const express = require('express');
const { newimageinsert } = require('../Component/Image.js');
const app = express.Router();



app.post('/:userId', newimageinsert )


module.exports = app ;


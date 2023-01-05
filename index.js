const express = require('express');
const {  mongoose } = require('mongoose');
const app = express();
const port =  process.env.port || 5001;
mongoose.set('strictQuery', false)
require('dotenv').config();

const user = require('./Api/Routes/user.js');
const image = require('./Api/Routes/image.js');
async function main(){
   await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l2fxn4c.mongodb.net/${process.env.DB_DATABASENAME}?retryWrites=true&w=majority`);
   console.log('connection')
}
main().catch(err => console.log(err.message));
app.use(express.json());

//middleware
app.use('/user', user );
app.use('/photo', image);












app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
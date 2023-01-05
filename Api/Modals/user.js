const {  mongoose } = require("mongoose");
const Userschema  = new mongoose.Schema({
    nameofphotoghaper: {
        type: String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        
    },
    title:{
        type : String,
        default : "photography",
    },
    date :{
     type: Date ,
     default :  Date.now(),
    },
    category :{
      type: [String],
    },
    fields : [String]
},{Timestamp:true})

module.exports = mongoose.model('Users', Userschema);

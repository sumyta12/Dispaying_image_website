const { default: mongoose } = require("mongoose");

const ImageSchema = mongoose.Schema({
   imagelink : {
      type: String,
      required: true,
      unique: true,
   },
   type : {
      type: String,
      default: "photo",
   },
   description : {
      type: String,
      trim : true
   }
})

module.exports = mongoose.model("ListPhotos", ImageSchema)
const Image = require("../Modals/imagecollection.js");
const User = require("../Modals/user.js");

const newimageinsert = async(req,res, next) =>{
   const newimage = new Image(req.body);
    try {
    const user_Id = await User.findById({_id : req.params.userId});
    const imginsert = await newimage.save();
    if(user_Id){
    try{
      await User.findByIdAndUpdate(user_Id , {
        $push:{
            category : imginsert._id,
        }
      })
      res.status(200).send({ success : "image inserted succesfully" })

    }catch(e){console.log(e)}
    }
     else {
      res.status(404).send({ message : 'User not found' });
    }
  }catch(err){ console.log(err.message) }
}


module.exports  = { newimageinsert};
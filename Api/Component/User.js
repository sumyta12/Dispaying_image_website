const User = require("../Modals/user.js");

const postuser = async (req, res, next) => {
  const user = new User({
    nameofphotoghaper: req.body.nameofphotoghaper,
    password: req.body.password,
  });

  try {
    await user.save();
    res.status(200).send({ success: "user successfully inserted" });
  } catch (err) {
    console.log(err.message);
  }
};
const getuser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      length: user.length,
      data: {
        data: user,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
const getsingeuser = async(req,res,next) => {
  try{
   const query = await User.findOne({ nameofphotoghaper : req.params.username });
   console.log(query)
   res.json(query);
  }catch(err){
    console.log(err.message);
  }
}
/**
 * delete single user first
*/
const deleteuser = async (req, res, next) => {

    try{
      await User.deleteOne({ nameofphotoghaper : req.params.username });
      res.status(200).send({ message : 'User deleted successfully'})
    }catch(err){console.log(err.message);}

}

/**Delate many user at a time **/
module.exports = { postuser, getuser , getsingeuser , deleteuser};

// backend/controllers/authController.js
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, password,email,phone } = req.body;
    const user = new User({ username, password ,email,phone});
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//exports.getalluser=async () =>{ return await User.find();}; 

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body)
    const user = await User.findOne({username});
    // const userall = await User.findOne();
    // console.log("alluser" , userall);

    console.log(user)
    if (user) {  
        if(user.password == password){
            res.status(200).json({ message: 'Login successful' });
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
        }
      
    } else {
      res.status(401).json({ message: 'user not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

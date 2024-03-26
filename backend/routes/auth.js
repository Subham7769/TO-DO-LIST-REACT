const router = require("express").Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

//signin
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password);
        const user = new User({username, email, password:hashedPassword})
        await user.save().then(()=>{
            res.status(200).json({message:"Signup successful!"});
        })
    } catch (error) {
        res.status(400).json({message:"User Already Registered"});
    }
})

//login
router.post("/login", async (req, res)=>{
    try {
        //check if user exist in db
        const user = await User.findOne({email: req.body.email});
        if(!user){
            res.status(400).json({message:"Please Sign up First"})
        }

        //check if the password is correct for the user
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password)
        if(!isPasswordCorrect){
            res.status(400).json({message:"Wrong Password"})
        }

        const {password, ...others} = user._doc;
        res.status(200).json({others})
    } catch (error) {
        res.status(400).json({
            message:"credentials mismatched",
            error: error
        })
    }
})

module.exports = router; 
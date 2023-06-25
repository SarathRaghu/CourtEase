import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import user from "../models/user.js"; 

export const register = async (req, res) => {
try {
    const { username, password, email } = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new user({
      username,
      password: passwordHash,
      email,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



const login = async (req, res)=>{
    try{
        const {email,password}=req.body;
        console.log(email, password)
        const users=await user.findOne({email:email});
        if(!users){return res.status(400).json({msg : 'User doesnot exist' })}

        const isMatch=await bcrypt.compare(password,users.password);
        if(!isMatch){return res.status(400).json({msg : 'Invalid credential' })}

        const token = jwt.sign({id:users._id},process.env.JWT_SECRET);
        const msg="exist";
        delete users.password;
        res.status(200).json({token,users,msg});

    }catch(err){res.status(500).json({error:err.message});}
}

export default login;

import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup=(req,res)=>{

try {
    const {Fullname,email,password}=req.body;
    const user=User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"})
    }

    const createdUser=new User({
        Fullname,
        email,
        password
    })
    createdUser.save()
    res.status(201).json({message:"User Created Successfully"})
} catch (error) {
    console.log("Error:  "+ error.message)
    res.status(500).json({message:"Internal server error"})
}

}
import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            min:2,
            max:50,
        },
        password:{
            type:String,
            required:true,
            max:20,
        },
        email:{
            type:String,
            required:true,
            max:20,
            unique:true,
        },
    },{timestamps:true}
)

const user=mongoose.model("user",UserSchema);
export default user;
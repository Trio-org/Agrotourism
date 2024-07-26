import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image:[String],
    role: { type: String, enum: ['Farmer', 'Tourist', 'Corporate', 'Admin'], required: true },
    email: { type: String, required: true, unique: true },
    phone:{type:Number,required:true,unique:true},
    // refreshToken: { type: String }
});

const User = mongoose.model('User', userSchema);
export default User

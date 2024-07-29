import mongoose, { get } from "mongoose";
const otpschema=new mongoose.Schema(
    {
        phonenumber:{
            type:String,
            required:true
        },
        otp:{
            type:String,
            required:true
        },
        otpexpiry:{
            type:Date,
            default:Date.now,
            get:(otpExpiration)=>otpExpiration.getTime(),
            set:(otpExpiration)=>new Date(otpExpiration)
        }
    }
)
const Otp=mongoose.model('Otp',otpschema)
export default Otp
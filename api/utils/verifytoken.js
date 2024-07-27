import jwt  from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
export const verifytoken=(req,res,next)=>{
    const token=req.cookies.accessToken;

    if(!token) return next(errorHandler(401,"unauthorized"))

        jwt.verify(token,process.env.ACCESS_SECRET,(err,user)=>{
            
            if(err) return res.status(300).json({ msg: 'Unauthorized' });

            // console.log(user)
            req.body.curruser=user;
            next()

        });
}
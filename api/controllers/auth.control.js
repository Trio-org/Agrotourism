import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import twilio from 'twilio';
import Otp from "../models/otp.model.js";

// import { Twilio } from "twilio";

dotenv.config();
export const registercontrol = async (req, res, next) => {
  const { username, password, role, email, phone } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  // const refreshTokenSecret = process.env.ACCESS_SECRET;
  const accessTokenSecret = process.env.ACCESS_SECRET;
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only set this in production
    sameSite: "Strict",
  };
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    let invaliduser = await User.findOne({ username });
    if (invaliduser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    user = new User({ username, password: hashedPassword, role, email, phone });

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);

    // Save user to the database
    await user.save();

    // Create access and refresh tokens
    // const payload = {  };
    const { password: pass, ...rest } = user._doc;
    const accessToken = jwt.sign({ id: user._id }, accessTokenSecret);
    // const refreshToken = jwt.sign(payload, refreshTokenSecret, { expiresIn: '7d' });

    // Save refresh token in the database
    // user.refreshToken = refreshToken;
    await user.save();
    res
      .cookie("accessToken", accessToken, cookieOptions)
      .status(200)
      .json(rest);
    // res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });

    // Send tokens to the client
    // res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

export const logincontrol = async (req, res, next) => {
  const { email, password } = req.body;
  const accessTokenSecret = process.env.ACCESS_SECRET;
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only set this in production
    sameSite: "Strict",
  };
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const { password: pass, ...rest } = user._doc;

    const accessToken = jwt.sign({ id: user._id }, accessTokenSecret);
    // const refreshToken = jwt.sign(payload, refreshTokenSecret, { expiresIn: '7d' });

    // user.refreshToken = refreshToken;
    await user.save();

    res
      .cookie("accessToken", accessToken, cookieOptions)
      .status(200)
      .json(rest);
    // res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 });

    // res.status(200).json({ msg: 'User logged in successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
export const forgetpass = async (req, res, next) => {
  try {
    const { phone } = req.body;
    console.log(phone);
    const validuser = await User.find({ phone: phone });
    console.log(validuser);
    if (!validuser) return res.status(400).json({ msg: "user not exist" });
    res.status(200).json("ok")
     }catch (err) {
    console.log(err.message);
  }
};

// export const verifyotp=async(req,res,next)=>{
    
//     try{const {user_otp}=req.body
//     (user_otp === otp)?res.send("saavu").status(200):res.status(300).send("oombu")
//     }catch(err){
//         console.log(err.message)
//     }
// }

export const getrole = async (req, res) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json("unauthorized");

    jwt.verify(token, process.env.ACCESS_SECRET, async (err, user) => {
      if (err) return res.status(300).json({ msg: "Unauthorized" });
      else {
        const validuser = await User.findById(user.id);
        res.send(validuser.role).status(200);
      }
      // next()
    });
  } catch (err) {
    console.log(err.message);
  }
};

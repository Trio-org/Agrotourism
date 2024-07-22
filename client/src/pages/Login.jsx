import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { CiMail } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import agroimg from '../assets/illustrations/agro4.png'

const Login = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formdata,setformdata]=useState({undefined})
  function handleChange(e) {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
    console.log(formdata);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    //   if (!isPhoneValid) {
    //     setErrorMessage('Please enter a valid phone number.');
    //     return;
    //   }

    // Handle form submission logic here
    console.log("Form submitted", { formdata });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  md:bg-gray-50  relative">
    <div className="w-full lg:max-w-5xl md:shadow-xl rounded-xl  h-full flex" >
      <div className="w-1/2 hidden md:flex overflow-hidden">
        <img
          src={agroimg}
          className="object-cover h-full w-full rounded-l-xl hover:scale-105 transition-all duration-300"
          alt=""
        />
      </div>
      <div className="md:bg-white p-8 rounded-lg w-full md:w-1/2 rounded-r-xl ">
        <h1 className="text-2xl font-bold mb-6 text-[#009a74] text-center">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-3">
          {/* <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
            <label
              htmlFor="username"
              className="text-gray-700 font-bold "
            >
              <FaUser size={25} style={{fill:"#47a15d"}}/>
            </label>
            <input
              type="text"
              id="username"
              value={formdata.username || ''}
              onChange={handleChange}
              placeholder="username"
              className="w-full p-2 outline-none  rounded" 
            />
          </div> */}
          <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
            <label
              htmlFor="email"
              className=" text-gray-700 font-bold "
            >
              <CiMail size={30} style={{fill:"#009a74"}}/>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formdata.email || ''}
              onChange={handleChange}
              minLength={5}

              className="w-full p-2 outline-none  rounded"
            />
          </div>
          <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
            <label
              htmlFor="password"
              className="text-gray-700 font-bold"
            >
              <RiLockPasswordFill size={25} style={{fill:"#009a74"}}/>

            </label>
            <input
              type="password"
              id="password"
              value={formdata.password || ''}
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 outline-none  rounded"
              maxLength={10}

            />
          </div>
          {/* <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
            <label
              htmlFor="phone"
              className="text-gray-700 font-bold"
            >
              <FaPhoneAlt size={25} style={{fill:"#47a15d"}}/>
            </label>
            <input
              placeholder="Phone number"
              id='phone'
              className="w-full p-2 outline-none  rounded"
              value={formdata.phone || ''}
              onChange={handleChange}
              maxLength={10}
            />
          </div> */}
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#009a74] bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
          >
            Login
          </button>
          <Link
              to={'/register'}
              className="w-full text-center border border-[#009a74]  hover:text-green-900 text-[#009a74] mt-2 font-bold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Regsiter
            </Link>
        </form>
      </div>
    </div>
    {/* <svg viewBox="0 0 200 200" className="w-1/4 opacity-5 absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg">
<path fill="#24A148" d="M56.5,-18.4C66.1,11.3,62,45.5,45.1,56.5C28.1,67.4,-1.6,55.3,-22.6,38.3C-43.6,21.3,-55.9,-0.4,-50.7,-24C-45.5,-47.6,-22.8,-73.1,0.3,-73.2C23.4,-73.3,46.8,-48.1,56.5,-18.4Z" transform="translate(100 100)" />
</svg> */}
  </div>
  )
}

export default Login

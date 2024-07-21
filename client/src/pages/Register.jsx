import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "animate.css/animate.compat.css"
import ScrollAnimation from "react-animate-on-scroll";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //   if (!isPhoneValid) {
    //     setErrorMessage('Please enter a valid phone number.');
    //     return;
    //   }

    // Handle form submission logic here
    console.log("Form submitted", { username, email, password, phone });
  };
  return (
    <div className="min-h-screen flex items-center justify-center  md:bg-gray-50 relative">
      <div className="w-full lg:max-w-5xl md:shadow-xl rounded-xl  h-full flex" >
        <div className="w-1/2 hidden md:flex overflow-hidden">
          <img
            src="https://www.hotelierindia.com/cloud/2023/07/21/image-2.png"
            className="object-cover h-full w-full rounded-l-xl hover:scale-105 transition-all duration-300"
            alt=""
          />
        </div>
        <div className="md:bg-white p-8 rounded-lg w-full md:w-1/2 rounded-r-xl ">
          <h1 className="text-2xl font-bold mb-6 text-[#47a15d] text-center">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
              <label
                htmlFor="username"
                className="text-gray-700 font-bold "
              >
                <FaUser size={25} style={{fill:"#47a15d"}}/>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="username"
                className="w-full p-2 outline-none  rounded" 
              />
            </div>
            <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
              <label
                htmlFor="email"
                className=" text-gray-700 font-bold "
              >
                <CiMail size={30} style={{fill:"#47a15d"}}/>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 outline-none  rounded"
              />
            </div>
            <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
              <label
                htmlFor="password"
                className="text-gray-700 font-bold"
              >
                <RiLockPasswordFill size={25} style={{fill:"#47a15d"}}/>

              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 outline-none  rounded"
              />
            </div>
            <div className="flex items-center gap-2 px-2 border  border-gray-200 rounded-md">
              <label
                htmlFor="phone"
                className="text-gray-700 font-bold"
              >
                <FaPhoneAlt size={25} style={{fill:"#47a15d"}}/>
              </label>
              <input
              placeholder="Phone number"
                className="w-full p-2 outline-none  rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="w-full bg-[#47a15d] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Register
            </button>
            <button
              type="submit"
              className="w-full border border-[#47a15d]  hover:text-green-900 text-[#47a15dad] mt-2 font-bold py-2 px-4 rounded-lg transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {/* <svg viewBox="0 0 200 200" className="w-1/4 opacity-5 absolute top-0 right-0" xmlns="http://www.w3.org/2000/svg">
  <path fill="#24A148" d="M56.5,-18.4C66.1,11.3,62,45.5,45.1,56.5C28.1,67.4,-1.6,55.3,-22.6,38.3C-43.6,21.3,-55.9,-0.4,-50.7,-24C-45.5,-47.6,-22.8,-73.1,0.3,-73.2C23.4,-73.3,46.8,-48.1,56.5,-18.4Z" transform="translate(100 100)" />
</svg> */}
    </div>
  );
};

export default Register;

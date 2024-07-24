import React from "react";
import { IoMdMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import Footer from "../components/Footer";
// import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7c7b88a-5988-44fb-bcbb-ac69648bccb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="w-screen overflow-x-hidden">
      <div className="w-full flex flex-col lg:flex-row h-full mt-2 lg:p-5 ">
        <div className="w-full lg:w-1/2   flex md:justify-center   md:items-center   ">
          <form
            onSubmit={onSubmit}
            className="w-full md:1/2  bg-white flex  flex-col gap-5 p-2 lg:p-5 rounded-md shadow"
          >
            <h1 className="text-center text-xl font-semibold">
              Contact <span className="text-blue-500">us</span>
            </h1>
            <div className="w-full">
              <input
                type="text"
                placeholder="your name"
                className="w-full p-2 focus:outline-blue-500 border rounded-sm"
               name="name"
               required
                id=""
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="your mail"
                className="focus:outline-blue-500 border rounded-sm px-3 w-full p-2"
                name="email"
                id=""
                required
              />
            </div>
            <div className="">
              <textarea
                name="message"
                required
                id=""
                placeholder="Enter message"
                rows={10}
                cols={38}
                className="p-2 w-full focus:outline-blue-500 border rounded-sm"
              ></textarea>
            </div>
            <button type="submit" className="bg-slate-800 p-3 rounded-lg shadow-md text-white font-semibold opacity-90 hover:opacity-100">
              Send Message
            </button>
            <span className="text-center font-semibold text-green-600">{result}</span>
          </form>
        </div>
            <div className="lg:w-1/2 h-full flex flex-col  p-4  border-gray-200 items-center">
          
          <div className="">
            <h1 className="p-2 text-3xl text-slate-700 font-semibold">visit us</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2019093.4008399907!2d76.4086984778198!3d8.734983515620419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ce386bf3bc53%3A0x39760f733ac937e0!2sSadhana%20Foundations!5e0!3m2!1sen!2sin!4v1721761855419!5m2!1sen!2sin"
              
              style={{ border: "0" }}
              className="mx-auto border-none rounded lg:w-[500px] lg:h-[500px] h-[200px] w-[300px] sm:h-[400px] sm:w-[500px] "
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
            </div>
      </div>
      <div className=" w-full flex flex-col items-center p-2 ">
            <h1 className="text-lg font-semibold ">Follow us</h1>
            <ul className=" gap-4 flex items-center text-3xl">
              <a href="" className="p-1 rounded-full text-slate-800 bg-white ">
                <li>
                  <RiFacebookBoxFill />
                </li>
              </a>
              <a href="" className="p-1 rounded-full text-slate-800 bg-white ">
                <li>
                  <IoMdMail />
                </li>
              </a>
              <a href="" className="p-1 rounded-full text-slate-800 bg-white ">
                <li>
                  <AiFillInstagram />
                </li>
              </a>
            </ul>
          </div>
      <Footer />
    </section>
  );
};

export default ContactUs;

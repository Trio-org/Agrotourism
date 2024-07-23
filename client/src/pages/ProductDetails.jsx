import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaOpencart, FaStar } from "react-icons/fa6";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import agroimg from "../assets/illustrations/agro1.jpg";
import Footer from '../components/Footer'
import landscape1 from "../assets/gallery/landscape1.jpg";
import landscape2 from "../assets/gallery/landscape2.jpg";
import landscape3 from "../assets/gallery/landscape3.jpg";
import TourCard from "../components/TourCard";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductComment from "../components/ProductComment";
const ProductDetails = () => {
  const images = [landscape1, landscape2, landscape3];
  const [heroimg, setheroimg] = useState(null);
  const tours_data = [
    {
      id: 1,
      title: "Bankong,Thailand",
      rating: 4.5,
      pic: agroimg,
      location: "Thailand",
      amount: 99,
    },
    {
      id: 2,
      title: "Bankong,Japan",
      rating: 5,
      pic: agroimg,
      location: "Japan",
      amount: 199,
    },
    {
      id: 2,
      title: "Bankong,Japan",
      rating: 5,
      pic: agroimg,
      location: "Japan",
      amount: 199,
    },
  ];
  const handleBuy = () => {
    alert("Product bought!");
  };
  return (
    <div className="max-w-screen-2xl box-border overflow-x-hidden  flex flex-col  items-center">
      <div className="flex flex-col gap-2">
        <div className="max-w-6xl md:flex mt-2 md:mt-10 ">
          <div className=" overflow-x-hidden  md:w-1/2 p-2">
            <div className="w-full ">
              <img
                src={heroimg === null ? landscape1 : heroimg}
                alt=""
                className="shadow-md rounded-md"
              />
            </div>
            <div className="flex overflow-hidden  gap-3 justify-center pt-4">
              {images.map((img, i) => (
                <img
                  src={img}
                  alt=""
                  key={i}
                  className="w-[30%]  rounded-md hover:scale-105 transition-all duration-300"
                  onClick={() => setheroimg(img)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-1 flex flex-col gap-2 overflow-x-hidden overflow-y-auto">
            <div className="flex items-center gap-1 text-gray-700">
              <IoLocationOutline />
              <p className="font-semibold">location</p>
            </div>
            <h1 className="w-full text-justify font-bold text-2xl md:text-5xl text-gray-800">
              Theni Country egg
            </h1>
            <div className="flex gap-2 items-center ">
              <h3 className="font-semibold text-xl">$29.99</h3>
              <p className="text-sm line-through text-gray-600">$199</p>
            </div>
            <div className="flex mt-2 gap-2 items-center ">
              <input
                type="number"
                name=""
                placeholder="0"
                id=""
                className="border w-1/5 p-1 text-center focus:outline-blue-400"
              />
              <span>Quantity</span>
            </div>
            <div className="flex gap-4 justify-start items-center mt-2 p-3">
              <button className="px-3 py-2 bg-blue-600 rounded-lg bg-opacity-90 hover:bg-opacity-100 text-white font-semibold flex items-center gap-1">
                <FaOpencart size={20} />
                <span>Add to cart</span>
              </button>
              <button className="px-5 py-2 bg-green-700 bg-opacity-90 rounded-lg shadow-lg hover:bg-opacity-100 text-white font-semibold">
                Buy now
              </button>
            </div>
            <div className="">
              <h2 className="font-semibold text-slate-800 text-lg">
                Product Details
              </h2>
              <p className="w-full text-justify mt-2 text-sm text-gray-700 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolore minus ad dolor veniam, incidunt exercitationem, placeat
                ut dicta consequatur est voluptatum officia similique autem
                provident modi temporibus debitis ipsa.
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="font-semibold text-lg text-slate-800">Rating</h2>
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-center font-semibold text-4xl text-slate-700">
            similar products
          </h1>
          <div className="w-full flex flex-col items-center md:flex-row gap-3 justify-center p-2">
            {tours_data.map((tour) => (
              <ProductCard tour={tour} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <button className="px-8 py-3 rounded-full text-white font-bold bg-opacity-90 hover:scale-105 transistion-all duration-200 bg-yellow-500 shadow-md mb-3">
              Explore
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mb-5">
          <h1 className="font-semibold w-full text-slate-800 text-3xl pt-4 border-t border-gray-300 text-center">Reviews</h1>
          
          <div className="w-full md:w-3/4 flex flex-col gap-2 md:gap-4  p-2 md:p-4">
            <div className="w-full flex gap-2">
              <input type="text" className="w-full  p-2  outline-blue-500  rounded-lg" placeholder="Add your comment.."/>
              <button className="px-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="blue"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full flex flex-col items-center py-2 overflow-y-auto max-h-[200px]  gap-2 shadow-inner" >
              <ProductComment />
              <ProductComment />
              <ProductComment />
              <ProductComment />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;

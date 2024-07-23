import React from 'react'
// import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full border-t flex flex-col items-center sm:items-start sm:flex-row  px-2 gap-4 sm:px-2 justify-around py-4'>
     
      <div className='flex flex-col gap-2  w-full  sm:w-1/4 '>
        <h1 className='font-semibold  underline underline-offset-8'>Links</h1>
        <ul>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Home</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Shop</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Farm</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Cart</a></li>
        </ul>
      </div>
      <div className='w-full sm:w-1/4 flex  flex-col gap-2  '>
        <h1 className='font-semibold underline underline-offset-8'>Company</h1>
        <ul>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>About us</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Services</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>FAQ</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Privacy policy</a></li>
        <li><a href="" className='text-gray-600 hover:text-gray-800'>Terms & conditions</a></li>
        </ul>
      </div>
      <div className='w-full sm:w-1/4 flex flex-col gap-2 '>
        <h1 className='font-semibold underline underline-offset-8'>Office</h1>
        <ul className='text-gray-800 text-sm flex flex-col gap-2'>
        <p>AgroNest, abc mainroad,<br/>Theni,Tamilnadu,<br/>India</p>
        <li>Agronest@gmail.com</li>
        <li className='font-semibold'>+91-986476828</li>
        </ul>
      </div>
      <div className='w-full sm:w-1/4 flex  flex-col gap-3 '>
        <h1 className='font-semibold underline underline-offset-8'>Follow us</h1>
        <ul className='flex gap-2'>
          <li className='bg-blue-950 p-2 rounded-full'><a href=""><FaFacebookF style={{fill:"white"}} /></a></li>
          <li className='bg-red-900 p-2 rounded-full'><a href=""><FaInstagram style={{fill:"white"}}/></a></li>
          <li className='bg-blue-950 p-2 rounded-full'><a href=""><FaLinkedinIn style={{fill:"white"}}/></a></li>
          <li className='bg-slate-950 p-2 rounded-full'><a href=""><RiTwitterXLine style={{fill:"white"}}/></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

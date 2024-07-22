import React from 'react'
import { Link } from 'react-router-dom'
import agroimg from '../assets/illustrations/agro1.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";


const TourCard = ({tour}) => {

  return (
  
    <Link to={ `/details/:${tour.id}`} className='max-w-[90%] sm:max-w-sm  rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300'>
      <div className="w-full overflow-hidden "><Link to={'/details/:id'}><img src={tour.pic} alt="" className='rounded-t-lg h-60 w-full hover:scale-105 transition-scale duration-300 ' /></Link></div>
      <div className="h-1/2 px-3 py-2">
        <div className="flex justify-between ">
          <div className=" flex gap-1 items-center"><IoLocationOutline size={17} style={{fill:'gold'}}  />
          <p>{tour.location}</p></div>
          <div className="flex gap-1 items-center"><FaStar size={17} style={{fill:'gold'}} />
          <p>{tour.rating}</p></div>
        </div>
        <h1 className='font-semibold text-xl text-[#bbad70]'>{tour.title}</h1>
        <div className="flex justify-between items-center">
          <p className='text-sm text-gray-800'><span className='text-lg font-semibold text-green-700'>${tour.amount}</span>/per person</p>
          <Link to={'/details/:id'} className='bg-[#009a74] bg-opacity-95 hover:bg-opacity-100 text-white text-center font-semibold px-4 py-2 rounded-md'>Book</Link>
        </div>
      </div>
    </Link>
  
  )
}

export default TourCard

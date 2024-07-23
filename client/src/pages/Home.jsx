import React from 'react'
import TourCard from '../components/TourCard'
import agroimg from '../assets/illustrations/agro1.jpg'
import Gallery from '../components/Gallery'
import CubeLoader from '../utils/loader1/CubeLoader'
import ProductDetails from './ProductDetails'

const Home = () => {
  const tours_data=[
    {
      id:1,
      title:"Bankong,Thailand",
      rating:4.5,
      pic:agroimg,
      location:"Thailand",
      amount:99
    },
    {
      id:2,
      title:"Bankong,Japan",
      rating:5,
      pic:agroimg,
      location:"Japan",
      amount:199
    },
    
  ]
  return (
    <div>
      {/* <div className="flex flex-wrap gap-5 justify-center p-3">
        {tours_data.map((tour)=><TourCard tour={tour}/>)}
      </div>
      <Gallery /> */}
      {/* <ProductDetails /> */}
      {/* <CubeLoader /> */}
    </div>
  )
}

export default Home

import React from 'react'
import TourCard from '../components/TourCard'
import agroimg from '../assets/illustrations/agro1.jpg'
import Gallery from '../components/Gallery'
import CubeLoader from '../utils/loader1/CubeLoader'
import ProductDetails from './ProductDetails'
import Footer from '../components/Footer'
import ContactUs from './ContactUs'
import ProductCard from '../components/ProductCard'
import TourDetails from './TourDetails'

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
      {/* <ContactUs /> */}
      {/* <div className="flex flex-wrap gap-5 justify-center p-3">
        {tours_data.map((tour)=><ProductCard tour={tour}/>)}
      </div> */}
      {/* <div className="flex flex-wrap gap-5 justify-center p-3">
        {tours_data.map((tour)=><TourCard tour={tour}/>)}
      </div> */}
      {/* <Gallery /> */}
      {/* <ProductDetails /> */}
      {/* <CubeLoader /> */}
      <TourDetails />
    </div>
  )
}

export default Home

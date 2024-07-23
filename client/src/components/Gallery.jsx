import React from "react";
import vert1 from "../assets/gallery/vertical1.jpg";
import vert2 from "../assets/gallery/vertical2.jpg";
import vert3 from "../assets/gallery/vertical3.jpg";
import landscape1 from "../assets/gallery/landscape1.jpg";
import landscape2 from "../assets/gallery/landscape2.jpg";
import landscape3 from "../assets/gallery/landscape3.jpg";
import square1 from "../assets/gallery/square.jpg";

const Gallery = () => {
  return (
    <div className="w-full max-w-5xl  p-5 pb-10 mx-auto  mb-10 columns-3 gap-1 md:gap-5 space-y-1 md:space-y-4 ">
     <img src={vert1} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
     <img src={vert2} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />

     <img src={square1} alt="" className="rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />

      <img src={landscape1} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
      <img src={landscape2} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />
      <img src={landscape3} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
      <img src={vert3} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
      
    </div>
  );
};

export default Gallery;

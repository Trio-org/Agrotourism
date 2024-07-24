import React from "react";
import './Productcomment.css'
const ProductComment = () => {
  return (
    <div className="w-full border-b  p-2 rounded-lg bg-white">
      <div className="flex items-center gap-2 w-full">
        <div className="bg-red-500 px-3 py-2 rounded-full text-white">JK</div>
        <div className="text-slate-700 font-semibold">Jackie Chan</div>
      </div>
      <div className="w-full p-2">
        <p className="text-sm text-gray-500 text-justify ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          assumenda at esse illum mollitia nam voluptate consequuntur aspernatur
          quidem fugiat.
        </p>
      </div>
    </div>
  );
};

export default ProductComment;

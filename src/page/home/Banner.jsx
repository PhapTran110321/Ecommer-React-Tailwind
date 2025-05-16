import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png";
const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 px-4">
      <div className="max-w-7xl mx-auto py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-12 object-cover">
        <div className="md:w-1/2">
          <img
            src={bannerImg}
            alt=""
            className="h-full w-full md:h-[562px] md:w-[442px] mx-auto"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-bold mb-5">Collections</h1>
          <p className="text-xl mb-7">
            You can explore and shop many different collection from various
            barands here.
          </p>
          <button className="bg-Black text-white font-semibold py-2 px-6 flex items-center gap-2 rounded-md hover:bg-orange-500 transition-all duration-300">
            <FaShoppingBag /> Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

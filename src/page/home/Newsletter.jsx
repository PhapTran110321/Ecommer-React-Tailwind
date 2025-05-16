import React from "react";

import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 py-16 px-4">
      <h2 className="text-3xl capitalize font-semibold text-center mb-8">
        follow products and discounts on instagram
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-20">
        <Link>
          <img src="images/instagram/img1.png"></img>
        </Link>
        <Link>
          <img src="images/instagram/img2.png"></img>
        </Link>
        <Link>
          <img src="images/instagram/img3.png"></img>
        </Link>
        <Link>
          <img src="images/instagram/img4.png"></img>
        </Link>
        <Link>
          <img src="images/instagram/img5.png"></img>
        </Link>
        <Link>
          <img src="images/instagram/img6.png"></img>
        </Link>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h2 className="capitalize text-3xl font-semibold text-center mb-8">
          or subcribe to the newsletter
        </h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address..."
            className="h-8 bg-transparent border-b-2 border-black pl-2 outline-none md:w-2/3 w-full mr-4 placeholder:text-black/50  "
          />
          <button
            type="submit"
            className="py-1 px-6 bg-black text-white rounded-md"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

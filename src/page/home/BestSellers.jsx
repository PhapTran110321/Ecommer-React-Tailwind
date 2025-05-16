import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const bestSellers = products.filter((item) => item.status === "Best Selers");

  console.log(bestSellers);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      {/* HEADER SECTION */}
      <div className="text-center">
        <h3 className="font-semibold text-3xl mb-5">Best Sellers</h3>
        <p className="text-black/50 md:w-2/3 mx-auto mb-8">
          Loprem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Arcu
          Nunc, Fermentum Quis Sapien, In, Placerat Scelerisque Risis. Class
          Aptent Taciti Sociosqu Ad Litora Torquent Per
        </p>
      </div>

      {/* BEST SELLER PRODUCTS */}
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            // sau mỗi 3 giây thì tự động chuyển slide
            delay: 3000,
            // nào người dùng click vào navigation thì mới hủy được autoplay
            disableOnInteraction: false,
          }}
          // cho phép người dùng click vào nút tròn để chuyển slide
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <img
                  src={product.image}
                  alt=""
                  className="w-full mx-auto hover:scale-105 transition-all duration-300"
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">
                  {product.title}
                </h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;

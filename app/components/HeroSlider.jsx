"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div className="w-full bg-base-100 pt-30 pb-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Welcome to <span className="text-green-500">QuickCart</span>
          </h1>
          <p className="text-lg">
            Buy your favorite product. We ensure quality and reasonable products.
          </p>

          {/* Search Box */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search meals..."
              className="w-full px-4 py-2 border border-gray-300  rounded-xl shadow-sm focus:outline-none focus:border-2 focus:border-blue-500 "
            />
            <button className="px-4 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white cursor-pointer transition">
              Search
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3500}
            showArrows={false}
          >
            <div style={{ height: '350px' }}> 
              <Image
                src="/banner1.jpeg"
                alt="banner1"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div style={{ height: '350px' }}> 
              <Image
                src="/banner2.jpeg"
                alt="banner2"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div style={{ height: '350px' }}> 
              <Image
                src="/banner3.jpeg"
                alt="banner3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

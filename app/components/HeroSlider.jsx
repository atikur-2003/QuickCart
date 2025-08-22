'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg', // Replace with your image path
    title: 'Discover Our Latest Products',
    text: 'Explore our curated collection of high-quality items designed for you.',
    buttonText: 'Shop Now',
    buttonLink: '/products',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg', // Replace with your image path
    title: 'Unleash Your Potential',
    text: 'Find the tools you need to succeed and elevate your everyday life.',
    buttonText: 'Learn More',
    buttonLink: '/about',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg', // Replace with your image path
    title: 'Quality and Elegance Combined',
    text: 'Experience the perfect blend of style, durability, and craftsmanship.',
    buttonText: 'View Details',
    buttonLink: '/details',
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="text-center text-white p-6 max-w-2xl">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl mb-6">{slide.text}</p>
                
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
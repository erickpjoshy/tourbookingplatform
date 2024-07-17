import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './sectiontwo.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const cardArray = [
  { image: '/mcard1.png', place: 'Georgia', price: 'SAR 100' },
  { image: '/mcard2.png', place: 'London', price: 'SAR 150' },
  { image: '/mcard3.png', place: 'Egypth ', price: 'SAR 100' },
  { image: '/mcard1.png', place: 'Georgia', price: 'SAR 100' },
  { image: '/mcard2.png', place: 'London', price: 'SAR 150' },
];

const Sectiontwo = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex">
        <h1
          className="mt-10 sm:mt-20 text-4xl font-medium relative"
          style={{ lineHeight: '46.8px', letterSpacing: '0.195px' }}
        >
          Top Tour Packages
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {cardArray.map((item, index) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col p-2">
                <div className="swiper-img-container overflow-hidden">
                  <img src={item.image} className="overflow-hidden" />
                </div>
                <h1 className="text-2xl font-medium my-4">{item.place}</h1>
                <h1 className="text-xl mb-4">
                  <span className="font-medium">{item.price} </span>
                  <span className="font-light">Per Person</span>
                </h1>
                <button
                  className="bg-white w-40 text-sm"
                  style={{
                    border: '2px solid #E8194F',
                    height: '56px',
                    padding: '6px 6px',
                    color: ' #E8194F',
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Sectiontwo;

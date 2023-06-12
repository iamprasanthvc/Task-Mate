  import React from 'react';
  import { arrow2 } from '../Assets';
  import { features } from '../constants';
  import SwiperCore, { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";
  SwiperCore.use([Navigation]);

  const Features = () => {
    // define featureRows as an array of arrays
    const featureRows = [
      features.slice(0, 3),
      features.slice(3, 6),
      features.slice(6, 9),
    ];

    const swipe = {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  

    return (
    <section className="md:px-4 px-2 mx-4 text-center md:px-14 md:mx-14 font-Montserrat my-14 md:text-left">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center">
            <h3 className="text-xl">what is &nbsp;</h3>
            <br />
            <div className="text-2xl font-bold" style={{ lineHeight: "1.2" }}>
              TASK MATE
            </div>
            <img src={arrow2} alt="" className="hidden ml-8 md:inline-block" />
          </div>
        </div>
        <div>
          <div className="">
            <span className="text-sm">
              <span className="font-bold text-tmgreen">TASK MATE</span>
              &nbsp;is not a regular reminder app. Our system helps you to &nbsp;
              <br className="hidden md:block" />
              improve your work flow. keep you notified and motivated to complete &nbsp;
              <br className="hidden md:block" />
              your small tasks and achieve your big goals in a disciplined and &nbsp;
              <br className="hidden md:block" />
              consistent path.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-10">
        {/* desktop code */}
        {/* render feature section with three rows on desktop view */}
        <div className="flex flex-wrap hidden mt-10 md:block">
    {featureRows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-between w-full md:w-auto">
        {row.map((feature, index) => (
          <div key={index} className={`w-1/3 px-10 mb-4 ${rowIndex === 0 ? 'mb-4' : 'mt-4'}`}>
            <div className="card">
              <div className="flex flex-col items-center card-body feature-card-body">
                <img
                  src={feature.icon}
                  alt={feature.name}
                  className="object-cover p-4 m-4 rounded-full"
                  width={"150px"}
                  height={"auto"}
                />
                <h5 className="font-bold text-white card-title">{feature.name}</h5>
                <p className="text-sm text-white card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
          ))}
        </div>
      </div>

      {/* mobile slider */}

      <div className="md:hidden">
        <Swiper className="mySwiper" {...swipe}>
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="flex flex-col items-center mx-8 card-body feature-card-body">
                  <img
                    src={feature.icon}
                    alt={feature.name}
                    className="object-cover p-4 m-4 rounded-full"
                    width={"150px"}
                    height={"auto"}
                  />
                  <h5 className="font-bold text-white card-title">{feature.name}</h5>
                  <p className="text-sm text-white card-text">{feature.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        </Swiper>     
      
      </div>            
            



  </section>
  );
  };

  export default Features;

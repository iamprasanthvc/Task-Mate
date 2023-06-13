import React from 'react';
// import { arrow2, doublequotes } from '../Assets';
import { testimonialDetails } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // show two testimonials at a time
  slidesToScroll: 1, // scroll one testimonial at a time
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };


  return (
    <section className="mx-4 my-10 text-center md:px-14 md:mx-14 font-Montserrat md:my-14 md:text-left">
      <div className='md:hidden'>
      <div>
        <h2 className="text-lg md:hidden">Hear What our users Are Saying</h2>
      </div>

      {/* Add responsive class to adjust number of slides shown on different screen sizes */}
      <Slider {...settings} className="md:hidden">
        {testimonialDetails.map((testimonial, index) => (
          <div key={index} className="w-full hover:bg-gray-50">
            {/* Badge */}
            <p className="px-4 py-1 text-sm font-bold text-white rounded-tl-lg bg-sky-500 w-fit rounded-br-xl md:hidden">
              {' '}
              {' '}
            </p>
            <div className="grid grid-cols-6 p-5 gap-y-2">
              {/* Profile Picture */}
              <div className='content-center justify-center align-middle '>
                <img
                  src={testimonial.Image} alt='testimonial_image1'
                  className="h-auto rounded-full w-30 max-w-100 max-h-100"
                />
              </div>
              {/* Description */}
              <div className="col-span-5 mt-3 md:col-span-4">
                <p className="pb-2 mx-4 text-xs text-left text-gray-900">
                  {testimonial.review}
                </p>
                <p className="font-normal text-right text-tmgreen">
                  {testimonial.name}
                </p>
                <p className="text-sm text-right text-gray-400">{testimonial.job}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      </div>





      <div>
          {/* Testimonial section for medium screens */}
      <div className="hidden md:grid">
        <div className="flex items-center mb-4">
          <h2 className="pr-4 text-xl">Users Experience About</h2>
          <div className="text-2xl font-bold" style={{ lineHeight: '1.2' }}>
            TASK MATE
          </div>
        </div>
      <Slider {...settings} className="w-full">
  {testimonialDetails.map((testimonial, index) => (
    <div key={index} className="w-full hover:bg-gray-50">
      {/* Badge */}
      <p className="px-4 py-1 text-sm font-bold text-white rounded-tl-lg bg-sky-500 w-fit rounded-br-xl md:hidden">
        {' '}
        FEATURED{' '}
      </p>
      <div className="grid grid-cols-6 p-5 gap-y-2">
        
        {/* Description */}
        <div className="flex flex-col justify-center col-span-5 mt-3 md:col-span-4">
  <p className="mx-4 text-xs text-left text-gray-900">
     {"\" " + testimonial.review + " \" "}
          </p>  
          <br />
  <div className="text-center">
    <p className="mx-4 text-sm font-semibold text-left text-tmgreen">
      {testimonial.name}
    </p>
    <p className="mx-4 text-xs text-left text-gray-400">{testimonial.job}</p>
  </div>
</div>


        {/* Profile Picture */}
        <div className='justify-center col-span-2 align-middle md:col-span-2 '>
          <img
            src={testimonial.Image} alt='testimonial_image'
            className="w-80 h-auto rounded-[15px]"
          />
        </div>
      </div>
    </div>
  ))}
</Slider>
 
      </div>

    
      </div>
      
    </section>
    
  );
};


export default Testimonials;

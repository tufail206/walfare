import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className=' overflow-hidden ' >
      
      <div className='w-full '>
        <div className='w-full h-[600px] relative'>
          <img src="images/b6.jpg" alt="" width={"100%"} className='h-full' />
          <div className='absolute top-0 left-0  bg-[#1414146d] w-full h-full flex justify-center items-center'>
            <div>
              <h2 className='text-xl text-white'>welcome to</h2>
              <h2 className='text-5xl text-primary font-bold'>the ummat walfare Organization</h2>
            </div>
          </div>
        </div>

      </div>  <div className='w-full '>
        <div className='w-full h-[600px] relative'>
          <img src="images/b5.webp" alt="" width={"100%"} className='h-full' />
          <div className='absolute top-0 left-0  bg-[#1414146d] w-full h-full flex justify-center items-center'>
            <div>
              <h2 className='text-xl text-white'>welcome to</h2>
              <h2 className='text-5xl text-primary font-bold'>the ummat walfare Organization</h2>
            </div>
          </div>
        </div>

      </div>  <div className='w-full '>
        <div className='w-full h-[600px] relative'>
          <img src="images/b4.jpg" alt="" width={"100%"} className='h-full' />
          <div className='absolute top-0 left-0  bg-[#1414146d] w-full h-full flex justify-center items-center'>
            <div>
              <h2 className='text-xl text-white'>welcome to</h2>
              <h2 className='text-5xl text-primary font-bold'>the ummat walfare Organization</h2>
            </div>
          </div>
        </div>

      </div>
  
    </Slider>
  );
}



import React from 'react';
import Testi from '/public/Images/Testimonials.png';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className='pl-[400px] items-center pt-[190px] space-y-6 sm:pl-4 sm:pt-[100px] sm:text-center'>

      <div>
        
        <h1 className="text-[48px] font-bold w-[560px] h-[58px] sm:text-[32px] sm:w-full sm:h-auto">
          <span className='sm:hidden'>Customers testimonials</span>
          <span className='hidden sm:block'>What our students say</span>
        </h1>

        <p className="w-[560px] h-[27px] font-normal pt-[25px] sm:w-full sm:text-center sm:pt-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      
      <div className='pt-[70px] sm:pt-[40px]'>
        <Image
          src={Testi}
          alt='ourteam'
          width={1152}
          height={417.89}
          className='w-[560px] sm:w-[90%] sm:max-w-[1152px] mx-auto'  
        />
      </div>

    </div>
  );
};

export default Testimonials;

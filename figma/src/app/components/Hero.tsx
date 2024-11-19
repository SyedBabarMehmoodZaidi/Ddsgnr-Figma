import Image from 'next/image';
import Girl from '/public/Images/Image.png';
import Banner from '/public/Images/2.png';
import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col h-auto'>
      {/* Hero Section */}
      <div className='flex w-full h-[80%]'>
        {/* Left Section */}
        <div className='w-1/2 flex flex-col justify-center items-start space-y-4 pl-[176px]'>
          <h1 className='max-w-[496px] font-bold text-[40px]'>
            Learn new skills online with ease
          </h1>
          <p className='max-w-[902px] text-[30px]'>
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>

          <div className='flex justify-between gap-[16px]'>
            <button className='bg-black text-white w-[178px] font-medium text-[14px] h-[48px] flex items-center justify-center rounded-[5px]'>
              Start Learning Now
            </button>
            <button className='border-[1px] border-black w-[178px] font-medium text-[14px] h-[48px] flex items-center justify-center rounded-[5px]'>
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex justify-center items-center w-1/2'>
          <Image src={Girl} alt='teacher' width={720} height={900} />
        </div>
      </div>

      {/* Banner Section */}
      <div className='w-full'>
        <Image src={Banner} alt='banner' layout='responsive' width={1280} height={228} />
      </div>
    </div>
  );
};

export default Hero;

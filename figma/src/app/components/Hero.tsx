import Image from 'next/image';
import Girl from '/public/Images/Image.png';
import Banner from '/public/Images/2.png';
import React from 'react';
import Category from './Category';

const Hero = () => {
  return (
    <div className="flex flex-col h-auto">
     
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
        
        <div className="flex flex-col justify-start items-start px-8 md:pl-[176px] gap-4 pt-16 md:pt-[300px] w-full md:w-1/2">
          <h1 className="text-[32px] md:text-[40px] font-bold max-w-[496px] mobile:w-[380px] mobile:h-[174px]">
            Learn new skills online with ease
          </h1>
          <p className="text-[20px] md:text-[30px] max-w-[902px]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-wrap gap-[16px] md:gap-[24px]">
            <button className="bg-black text-white w-[178px] font-medium text-[14px] h-[48px] flex items-center justify-center rounded-[5px]">
              Start Learning Now
            </button>
            <button className="border-[1px] border-black w-[178px] font-medium text-[14px] h-[48px] flex items-center justify-center rounded-[5px]">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-start">
          <Image
            src={Girl}
            alt="teacher"
            width={720}
            height={900}
            className="object-cover"
          />
        </div>
      </div>

     
      <div className="w-full mt-8">
        <Image src={Banner} alt="banner" layout="responsive" width={1280} height={228} />
      </div>

      
      <Category />
    </div>
  );
};

export default Hero;

import React from 'react';
import Content from '/public/Images/Content.png';
import Image from 'next/image';
import Team from './Team';

const Courses = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      
      <div className=''>
      <h1 className="text-[56px] font-bold w-[768px] h-[67px] text-center">Courses</h1>

     
      <p className="text-center font-normal text-[18px] pt-[25px]">
        Your Ultimate Guide to Learning
      </p>
      </div>

      <div className='pt-[60px]'>
      <Image src={Content} alt='courses' width={1152} height={1340}/>
      </div>

    <Team />
    </div>
  );
};

export default Courses;

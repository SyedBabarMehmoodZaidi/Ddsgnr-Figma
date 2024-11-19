import React from 'react';
import Content from '/public/Images/Content.png';
import Image from 'next/image';
import Team from './Team';

const Courses = () => {
  return (
    <div className="flex flex-col items-center pt-[190px] space-y-6">
      
      <div>
      <h1 className="text-[44px] font-bold text-center">Courses</h1>

     
      <p className="text-center text-lg pt-[25px]">
        Your Ultimate Guide to Learning
      </p>
      </div>

      <div className='pt-[60px]'>
      <Image src={Content} alt='courses' width={1800} height={132}/>
      </div>

    <Team />
    </div>
  );
};

export default Courses;

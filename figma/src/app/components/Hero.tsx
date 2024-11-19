import Image from 'next/image'
import Girl from '/public/Images/Image.png';
import React from 'react'

const Hero = () => {
  return (
    <div className='flex h-[80%]'>
        
      <div className='w-1/2 flex flex-col justify-center items-start space-y-4 pl-[176px]'>
        <h1 className='max-w-[496px] font-bold text-[40px]'>Learn new skills online with ease</h1>
        <p className='max-w-[902px] text-[30px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

      <button className='bg-black text-white w-[180px] font-medium text-[30px] h-[58px] flex items-center justify-center rounded-[5px]'>Start learn</button>
      <button className='border-[1px] border-black w-[250px] font-medium text-[30px] h-[58px] flex items-center justify-center rounded-[5px]'>Explore Courses</button>
      </div>
      
      <div className='flex justify-center items-center w-1/2'>
        <Image src={Girl} alt='teacher' width={720} height={900}/>
      </div>
    </div>
  )
}

export default Hero

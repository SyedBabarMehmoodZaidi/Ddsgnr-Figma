import Image from 'next/image';
import React from 'react';
import List from '/public/Images/List.png';

const Achivements = () => {
  return (
    <div>

<div className='flex flex-col items-center justify-center h-screen'>
  <h1 className='text-[44px] font-bold text-center w-full max-w-[1152px]'>
    Our Achievements
  </h1>
  <p className='text-lg w-full max-w-[1152px] text-center mt-4'>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eligendi quos quas ut iste officiis cupiditate blanditiis reiciendis facere voluptates vero quam, quibusdam aut nisi id obcaecati. Saepe, quam cum.
  </p>

    <div className='pt-[80px]'>
    <Image src={List} alt='remarks' width={1256} height={96} className='mx-auto'/>
    </div>
    
    </div>
    

    <div className='flex flex-col items-center justify-center h-screen mt-[-30rem]'>
      <h1 className=' text-[44px] font-bold text-center w-full max-w-[1152px]'>
        Our Achivements
      </h1>

      <p className='text-lg w-full max-w-[1152px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eligendi quos quas ut iste officiis cupiditate blanditiis reiciendis facere voluptates vero quam, quibusdam aut nisi id obcaecati. Saepe, quam cum.</p>
    
    <div className='pt-[80px]'>
    <Image src={List} alt='remarks' width={1256} height={96} className='mx-auto'/>
    </div>
    
    </div>

    </div>
  )
}

export default Achivements

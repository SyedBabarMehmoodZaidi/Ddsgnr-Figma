import Image from 'next/image';
import React from 'react';
import List from '/public/Images/List.png';

const Achivements = () => {
  return (
    <div>

    <div className='text-center pt-[90px]'>
      <h1 className='pt-[150px] text-[44px] font-bold'>
        Our Achivements
      </h1>

      <p className='pt-[45px] text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eligendi quos quas ut iste officiis cupiditate blanditiis reiciendis facere voluptates vero quam, quibusdam aut nisi id obcaecati. Saepe, quam cum.</p>
    
    <div className='pt-[80px]'>
    <Image src={List} alt='remarks' width={1800} height={132} className='mx-auto'/>
    </div>
    
    </div>
    

    <div className='text-center pt-[150px]'>
      <h1 className='pt-[150px] text-[44px] font-bold'>
        Our Achivements
      </h1>

      <p className='pt-[45px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eligendi quos quas ut iste officiis cupiditate blanditiis reiciendis facere voluptates vero quam, quibusdam aut nisi id obcaecati. Saepe, quam cum.</p>
    
    <div className='pt-[80px]'>
    <Image src={List} alt='remarks' width={1800} height={132} className='mx-auto'/>
    </div>
    
    </div>

    </div>
  )
}

export default Achivements

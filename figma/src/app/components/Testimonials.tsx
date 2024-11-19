import React from 'react'
import Testi from '/public/Images/Testimonials.png';
import Image from 'next/image';
const Testimonials = () => {
  return (
    
    <div className='pl-[400px] items-center pt-[190px] space-y-6'>

       <div>
      <h1 className="text-[44px] font-bold">Customers testimonials</h1>

     
      <p className="text-lg pt-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      </div>
     

     <div className='pt-[70px]'>
        <Image src={Testi} alt='ourteam' width={2500} height={80}/>
     </div>
     
    </div>

  )
}

export default Testimonials

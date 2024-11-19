import React from 'react'
import Footeri from '/public/Images/Container.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='pt-[800px] pb-[300px]'>
      <Image src={Footeri} alt='footer' width={1800} height={132} className='mx-auto'/>
    </div>
  )
}

export default Footer


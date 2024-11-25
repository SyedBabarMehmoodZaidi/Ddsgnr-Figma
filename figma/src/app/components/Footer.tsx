import React from 'react'
import Footeri from '/public/Images/Container.png';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='pt-[400px] pb-[300px]'>
      <Image src={Footeri} alt='footer' width={1280} height={684} className='mx-auto'/>
    </div>
  )
}

export default Footer


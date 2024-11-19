import Image from 'next/image';
import Ddsgnr from '/public/Images/Ddsgnr.png';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-4 ">
      
      <div className='pl-32'>
      <Image src={Ddsgnr} alt="logo" width={130.6} height={41} className="pt-[29px] pb-[29px] gap-[10.5px]" />
      </div>
      
      <div className="flex justify-center gap-32 text-lg font-normal py-4">
        <Link href="#" className="relative">
          Home
          <span className="absolute top-8 left-0 w-full h-0.5 bg-black"></span>
        </Link>
        <Link href="#">Courses</Link>
        <Link href="#">Services</Link>
        <Link href="#">Achievement</Link>
        <Link href="#">About Us</Link>
      </div>

      
      <div className="flex gap-3 pr-[200px]">
        <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-200">Login</button>
        <button className="border border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

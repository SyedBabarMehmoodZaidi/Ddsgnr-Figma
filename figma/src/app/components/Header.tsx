'use client'

import Image from 'next/image';
import Ddsgnr from '/public/Images/Ddsgnr.png';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b-4 p-4">
      
      <div className="pl-4">
        <Image src={Ddsgnr} alt="logo" width={130.6} height={41} className="w-[130.6px] h-[41px]"
        />
      </div>

     
      <nav className="hidden lg:flex justify-center w-[1280px] h-[72px] gap-32 text-lg font-normal">
        <Link href="#" className="relative">
          Home
        </Link>
        <Link href="#">Courses</Link>
        <Link href="#">Services</Link>
        <Link href="#">Achievement</Link>
        <Link href="#">About Us</Link>
      </nav>

     
      <div className="hidden lg:flex gap-3 pr-[200px]">
        <button className="border border-black px-4 py-2 rounded-md hover:bg-gray-200">Login</button>
        <button className="border border-black bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700">Sign Up</button>
      </div>

      
      <div className="lg:hidden pr-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black border border-gray-300 p-2 rounded-md"
        >
         
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg border rounded-md p-4 w-[200px] z-50">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Courses</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Achievement</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;


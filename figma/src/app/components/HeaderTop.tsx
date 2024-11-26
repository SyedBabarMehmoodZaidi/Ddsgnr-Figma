import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const HeaderTop = () => {
  return (
    <div className="hidden lg:flex pl-[80px] justify-between font-normal leading-9 text-center border-b-2cd">
      <div className="flex gap-4">
        <span>Phone Number: 0308-2735132</span> |
        <span>Email: babarzaidi1122@gmail.com</span>
      </div>

      <div className="flex gap-4 pr-[50px]">
        
          <FaFacebookF />
        
          <FaInstagram />
        
          <FaTwitter />   
        
          <FaLinkedin />
        
      </div>
    </div>
  );
};

export default HeaderTop;

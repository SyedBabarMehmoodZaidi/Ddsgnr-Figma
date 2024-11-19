import React from 'react'
import OurTeam from '/public/Images/Team.png';
import Image from 'next/image';

const Team = () => {
  return (
    <div className='flex flex-col items-center pt-[190px] space-y-6'>

       <div>
      <h1 className="text-[44px] font-bold text-center">Our Team</h1>

     
      <p className="text-center text-lg pt-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      </div>
     
     <div className='pt-[70px]'>
        <Image src={OurTeam} alt='ourteam' width={2000} height={132}/>
     </div>
    </div>
  )
}

export default Team

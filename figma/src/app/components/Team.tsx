import React from 'react'
import OurTeam from '/public/Images/Team.png';
import Image from 'next/image';

const Team = () => {
  return (
    <div className='flex flex-col items-center pt-[190px] space-y-6'>

       <div>
      <h1 className="text-[48px] font-bold text-center w-[768px] h-[58px]">Our Team</h1>

     
      <p className="text-center w-[768px] h-[27px] font-normal pt-[25px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      </div>
     
     <div className='pt-[70px] gap-96'>
        <Image src={OurTeam} alt='ourteam' width={1280} height={482}/>
     </div>
    </div>
  )
}

export default Team

import React from 'react'
import Frame from '/public/Images/Frame.png';
import Image from 'next/image';
const Category = () => {
  return (
    <div className='place-content-center'>
      <div>  
      <h1 className='text-[48px] font-bold text-center gap-24'>
        Explore Courses By Category 
        </h1>
        </div>

        <p className='pt-[25px] text-center'>
            Discover a wide range of courses a variety of subjects, taught by expert instructors.
        </p>
    
    <div className='pt-[126px]'>
    <Image src={Frame} alt='category' width={1280} height={636} className=' mx-auto'/> 
    </div>
    
    </div>
  )
}

export default Category

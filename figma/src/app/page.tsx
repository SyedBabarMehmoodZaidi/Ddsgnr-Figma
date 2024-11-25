import React from 'react'
import Hero from './components/Hero';
import Achivements from './components/Achivements';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';


const HomePage = () => {
  return (
    <div>
      <Hero />
      <Achivements />
      <Courses />
      <Testimonials />
      
    </div>
  )
}

export default HomePage;

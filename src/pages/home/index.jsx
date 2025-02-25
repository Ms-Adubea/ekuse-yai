import React from 'react'
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import AboutInnovator from './sections/AboutInnovator';
import AboutProducts from './sections/AboutProducts';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <AboutInnovator />
        <AboutProducts />
        <Testimonials />
        <Gallery />
        <Contact />
    </div>
  )
}

export default Home;
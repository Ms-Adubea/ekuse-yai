import React from 'react'
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import AboutInnovator from './sections/AboutInnovator';
import AboutProducts from './sections/AboutProducts';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Services from './sections/Services';

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <AboutInnovator />
        <AboutProducts />
        <Services />
        <Gallery />
        <Contact />
    </div>
  )
}

export default Home;
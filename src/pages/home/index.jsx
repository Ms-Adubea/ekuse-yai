import React from 'react'
import Hero from './sections/Hero';
import AboutProducts from './sections/AboutProducts';
import AboutInnovator from './sections/AboutInnovator';
import Showcase from './sections/Showcase';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutProducts />
        <AboutInnovator />
        <Showcase />
        <Testimonials />
        <Gallery />
        <Contact />
    </div>
  )
}

export default Home;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Agricultural Entrepreneur',
      comment: 'Ekuse Metal Engineering transformed our cassava processing with their innovative machinery. The efficiency and durability of their equipment are unmatched!',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Industrial Manager',
      comment: 'The palm kernel cracker we purchased from Ekuse has significantly boosted our production capacity. Their team is professional and highly skilled.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Domestic User',
      comment: 'The metal gates we ordered are not only secure but also beautifully designed. Ekuse delivered beyond our expectations!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      role: 'Agricultural Specialist',
      comment: 'Their corn mill is a game-changer for our business. It’s efficient, easy to maintain, and has increased our output by 40%.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-base text-[#CD7F32] font-semibold tracking-wide uppercase">
            What Our Clients Say
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Testimonials
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from our satisfied customers about their experiences with Ekuse Metal Engineering.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  {/* Testimonial Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  {/* Testimonial Quote */}
                  <div className="relative">
                    <FaQuoteLeft className="text-gray-300 absolute -top-2 left-0" />
                    <p className="text-gray-600 italic mb-6 px-6">
                      {testimonial.comment}
                    </p>
                    <FaQuoteRight className="text-gray-300 absolute -bottom-2 right-0" />
                  </div>
                  {/* Testimonial Author */}
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
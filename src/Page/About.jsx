import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  const ref = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.scrollTo(0,0)
    gsap.fromTo(ref.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1, 
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <div ref={ref} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About RB-BANGELS
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your premier destination for exquisite bangles and jewelry that celebrate tradition and modern style.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded with a passion for preserving traditional craftsmanship while embracing contemporary designs, 
              RB-BANGELS has been serving customers since 2020. Our journey began in Rajasthan, 
              the land known for its rich heritage in jewelry making.
            </p>
            <p className="text-gray-600">
              Each piece in our collection is carefully crafted by skilled artisans who bring decades of 
              experience and dedication to their craft. We take pride in offering bangles that not only 
              adorn your wrists but also tell a story of tradition and elegance.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/about-image.jpg" 
              alt="Craftsman working on bangles" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
            <p className="text-gray-600">
              We ensure each piece meets our high standards of craftsmanship and durability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Authenticity</h3>
            <p className="text-gray-600">
              Every design reflects our commitment to genuine traditional techniques and materials.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We blend traditional methods with modern designs to create unique pieces.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Visit Our Store</h2>
          <p className="text-gray-600 mb-4">
            Experience our collection in person at our store located in:
          </p>
          <p className="text-gray-900 font-medium">
            Goshala Road Near Sani Temple, Rajasthan
          </p>
          <p className="text-gray-600 mt-2">
            Contact: 63770***** | Email: contact@rbbangels.com
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;

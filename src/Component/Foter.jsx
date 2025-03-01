import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Foter = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef()
  const add = useRef()

  useEffect(() => {
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
    })

    gsap.fromTo(add.current, {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: add.current,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [])

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div ref={add} className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              RB-BANGELS
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Crafting elegance through timeless designs. Your destination for exquisite bangles that tell your unique story.
            </p>
          </div>

          {/* Contact Info */}
          <div ref={add} className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-purple-500 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-purple-500" />
                <p>Goshala Road Near Sani Temple, Rajasthan</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-purple-500" />
                <p>63770*****</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500" />
                <p>contact@rbbangels.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-purple-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-purple-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-purple-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-purple-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-500 transition-colors flex items-center">
                  <span className="mr-2">→</span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div ref={ref} className="space-y-4">
            <h3 className="text-xl font-semibold border-b-2 border-purple-500 pb-2">Newsletter</h3>
            <p className="text-gray-400">Subscribe to get updates on our latest collections and special offers.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-xl">
              <FaTwitter />
            </a>
            <Link to="https://www.instagram.com/khan____0086/" className="text-gray-400 hover:text-purple-500 transition-colors text-xl">
              <FaInstagram />
            </Link>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RUBINA BANGLES SHOPE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Foter;

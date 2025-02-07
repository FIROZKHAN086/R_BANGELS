import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Foter = () => {
  return (
    <footer className="bg-gray-800  text-white">
      <div className="container mx-auto py-8 px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold mb-2 hover:scale-110">RB-BANGELS</h1>
            <p className="text-sm text-gray-400">
              Your one-stop solution for everything.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              FAQs
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#om"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white text-xl"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Contact Form */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-4">
        <p className="text-center text-sm text-gray-500">
          © 2025 FIROZKHAN. All rights reserved.
        </p>
      </div>
    </footer>
    // Footer Compontant Was Don
  );
};

export default Foter;

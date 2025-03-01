import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Terms = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div ref={ref} className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using RB-BANGELS website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Information</h2>
            <p className="text-gray-600">
              We strive to display accurate product information, including prices and availability. However, we reserve the right to modify prices, discontinue products, or correct errors without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Acceptance</h2>
            <p className="text-gray-600">
              Your order is subject to acceptance by us. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping and Delivery</h2>
            <p className="text-gray-600">
              Delivery times are estimates only. We are not responsible for delays beyond our control. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Returns and Refunds</h2>
            <p className="text-gray-600">
              Products may be returned within 7 days of delivery if they are in original condition. Refunds will be processed within 5-7 business days of receiving the returned item.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600">
              All content on this website, including images, text, and logos, is the property of RB-BANGELS and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Accounts</h2>
            <p className="text-gray-600">
              You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For any questions regarding these Terms and Conditions, please contact us at:
              <br />
              Email: contact@rbbangels.com
              <br />
              Phone: 63770*****
              <br />
              Address: Goshala Road Near Sani Temple, Rajasthan
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

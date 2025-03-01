import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Privacy = () => {
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
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12" ref={ref}>
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
            <p className="mb-4">
              At RB-BANGELS, we collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information</li>
              <li>Email address for newsletter subscriptions</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and updates</li>
              <li>Respond to your questions and requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We strive to protect your information but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to analyze trends, administer the website, track users' movements around the site, and gather demographic information about our user base as a whole.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <p>
              We may share your information with third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: contact@rbbangels.com
              <br />
              Phone: 63770*****
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

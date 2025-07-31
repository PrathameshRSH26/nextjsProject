'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h3 className="text-teal-600 text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-teal-600 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-teal-600">Home</a></li>
            <li><a href="#" className="hover:text-teal-600">About</a></li>
            <li><a href="/courses" className="hover:text-teal-600">Courses</a></li>
            <li><a href="#" className="hover:text-teal-600">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-teal-600 text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-600">Facebook</a></li>
            <li><a href="#" className="hover:text-teal-600">Twitter</a></li>
            <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-teal-600 text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm leading-relaxed">
            New Delhi, India<br />
            Delhi 10001<br />
            Email: <a href="mailto:info@musicschool.com" className="hover:text-purple-400">info@musicschool.com</a><br />
            Phone: <a href="tel:1234567890" className="hover:text-purple-400">(123) 456-7890</a>
          </p>
        </div>
      </div>
      <p className='text-center text-x pt-12 hover:text-teal-600  cursor-pointer hover:tracking-wide transition-all duration-300 ease-in-out'>@ 2025 Music School</p>
    </footer>
  );
};

export default Footer;

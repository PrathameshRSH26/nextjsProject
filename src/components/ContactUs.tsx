"use client";
import React from 'react';
import { Meteors } from './ui/meteors';
import Form from './Form';

const ContactUs = () => {
  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background meteors */}
      <Meteors number={100} />

      {/* Centered Form Content */}
      <div className="relative z-10">
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;

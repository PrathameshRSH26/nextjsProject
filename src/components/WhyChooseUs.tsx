'use client'
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from professional musicians with years of stage and teaching experience. Our instructors guide students through every step, from fundamentals to advanced techniques.",
    content: (
      <div className="border rounded-2xl flex h-full w-full items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "Personalized Lessons",
    description:
      "Every student is unique. Our curriculum is tailored to match your skill level, musical interests, and goals—whether it's classical piano or modern guitar.",
    content: (
      <div className="border rounded-2xl flex h-full w-full items-center justify-center text-white">
        Personalized music lessons
      </div>
    ),
  },
  {
    title: "Live Performances",
    description:
      "Gain real-world experience by participating in student recitals and live shows. Build confidence and showcase your progress on stage.",
    content: (
      <div className="border rounded-2xl flex h-full w-full items-center justify-center text-white">
        Live Performances
      </div>
    ),
  }
];

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/utils";
const testimonials = [
  {
    quote:
      "Joining the Harmony Musical Academy transformed my passion for music into real talent. The instructors are incredibly skilled and supportive, and the atmosphere is full of inspiration. I’ve grown not only as a musician but also as a performer.",
    name: "Ananya Sharma",
    title: "Piano Student, Harmony Musical Academy",
  },
  {
    quote:
      "Before joining, I had never picked up a guitar. Now, after six months, I can confidently play and even compose my own tunes. The step-by-step teaching and jam sessions made all the difference.",
    name: "Rohan Mehta",
    title: "Guitar Enthusiast, Beginner Batch",
  },
  {
    quote:
      "The vocal training I received here has truly elevated my singing abilities. From classical to contemporary, the mentors here know how to bring out your best.",
    name: "Sneha Patil",
    title: "Vocal Student, Advanced Level",
  },
  {
    quote:
      "As a working professional, I really appreciated the flexible timings and personalized coaching. Learning the violin was always a dream—this academy made it possible!",
    name: "Rahul Deshmukh",
    title: "Violin Student, Evening Batch",
  },
  {
    quote:
      "I enrolled my daughter in the kids’ keyboard course, and I’m amazed at her progress. The teachers make learning fun and interactive. Highly recommended for young learners!",
    name: "Neha Kulkarni",
    title: "Parent of 8-year-old student",
  },
];

const MovingCards = () => {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px]",
          "bg-[radial-gradient(circle,rgba(0,0,0,0.8)_0%,transparent_40%)]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="-mt-20 h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-transparent/[0.2] items-center justify-center relative overflow-hidden">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          <span className="text-teal-600">Hear Our Harmony :</span> Voices of
          Success ....
        </h2>
        <InfiniteMovingCards
          className="mt-16"
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default MovingCards;

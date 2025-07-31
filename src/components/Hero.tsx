import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="mt-32 p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-60 left-0 md:-top-50 md:left-80"
          fill="white"/>
        <h1
          className="mt-20 md:mt-0 text-4xl
                        md:text-7xl
                        font-bold bg-clip-text text-transparent
                        bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music ....
        </h1>
        <p
          className="mt-6 md:text-lg
        text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-8">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white bg-
              text-black dark:text-white">
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
"use client";

import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedSec = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="mt-6 py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With The Best
        </p>
      </div>

      <div className="mt-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient>
                <div className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 text-center">
                  {/* Title */}
                  <p className="mt-2 text-lg font-bold text-black dark:text-white">
                    {course.title}
                  </p>
                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                    {course.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All Courses Button */}
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="mb-8 inline-block px-6 py-2 rounded-xl bg-gray-900 text-white font-medium shadow-md hover:border-teal-600 transition duration-300 hover:scale-105 border"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};
export default FeaturedSec;

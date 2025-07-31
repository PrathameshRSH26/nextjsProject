"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Raag Symphony",
    description: "A student-composed orchestral piece blending Indian classical ragas with Western harmonic elements. Performed live during the Annual Winter Recital.",
    slug: "raag-symphony"
  },
  {
    title: "Digital Beats Studio",
    description: "An in-house student project where budding DJs created electronic music using Ableton and MIDI controllers. Final tracks were featured on Spotify.",
    slug: "digital-beats-studio"
  },
  {
    title: "Strings of Tomorrow",
    description: "An ensemble guitar performance by beginner-level students who collaborated on a medley of pop and classical tunes, showcasing their 3-month progress.",
    slug: "strings-of-tomorrow"
  },
  {
    title: "Voice of the Soul",
    description: "Advanced vocal students performed original compositions and reinterpretations of traditional bhajans at the Monsoon Music Festival.",
    slug: "voice-of-the-soul"
  },
  {
    title: "Keyboard Coding",
    description: "A creative project where students converted melodies into digital sheet music using MuseScore and Python-based MIDI manipulation tools.",
    slug: "keyboard-coding"
  },
  {
    title: "Rhythm Roots",
    description: "Percussion students explored Indian folk rhythms and created collaborative drumming sessions using dhol, tabla, and cajón.",
    slug: "rhythm-roots"
  },
];

const UpComingWebinars = () => {
  return (
    <div className="mt-2 py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <HoverEffect items={projects.map(webinar => ({
            title: webinar.title,
            description: webinar.description,
            link: `/webinars/${webinar.slug}`
          }))} />
        </div>

        <div className="text-center">
          <Link
            href="/webinars"
            className="mb-8 inline-block px-6 py-2 rounded-xl bg-black text-white font-medium shadow-md hover:border-teal-600 transition duration-300 hover:scale-105 border"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpComingWebinars;
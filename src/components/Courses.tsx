import React from 'react'
import { FocusCards } from './ui/focus-cards'

const Courses = () => {
  const cards = [
    {
      title: "Basic Music Theory",
      description: "Master the fundamentals of music theory and build a strong foundation for your musical journey.",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses/theory"
    },
    {
      title: "Advanced Composition",
      description: "Learn advanced composition techniques and create your own original musical pieces.",
      src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses/composition"
    },
    {
      title: "Song Writing",
      description: "Craft compelling songs with powerful lyrics and memorable melodies that resonate with your audience.",
      src: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses/songwriting"
    },
    {
      title: "Music Production",
      description: "Master the art of music production with industry-standard tools and professional techniques.",
      src: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses/production"
    },
    {
      title: "Piano Basics & Theory",
      description: "Learn piano fundamentals, scales, and music theory for all levels.",
      src: "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses"
    },
    {
      title: "Guitar Mastery",
      description: "Master chords, strumming, and advanced techniques in this comprehensive guitar course.",
      src: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "/courses"
    },
  ];

  return (
    <div className='mt-28 mb-8'>
      <FocusCards cards={cards} />
    </div>
  )
}

export default Courses;
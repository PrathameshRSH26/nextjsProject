import React from 'react'
import { FocusCards } from './ui/focus-cards'

const Courses = () => {
  const cards = [
    {
      title: "Beginner Guitar Lessons",
      description: "Master chords, strumming, and beginner songs in this hands-on guitar course.",
      src: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Piano Basics & Theory",
      description: "Learn piano fundamentals, scales, and music theory for all levels.",
      src: "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "DJ & Electronic Music",
      description: "Mix, blend, and drop beats like a pro with modern DJ tools and software.",
      src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Music Production Mastery",
      description: "Produce tracks using DAWs, loops, samples, and recording techniques.",
      src: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sound Engineering Basics",
      description: "Understand acoustics, mixing, and studio equipment for clean audio.",
      src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Vocal Training & Mic Techniques",
      description: "Improve pitch, control, breathing, and mic use for live & studio vocals.",
      src: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className='mt-28 mb-8'>
      <FocusCards cards={cards} />
    </div>
  )
}

export default Courses;
import React from 'react'
import Link from 'next/link'

const TheoryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
              Basic Music Theory
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master the fundamentals of music theory and build a strong foundation for your musical journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Note names and staff notation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Major and minor scales
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Chord construction and progressions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Time signatures and rhythm
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Key signatures and circle of fifths
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Course Details</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong>Duration:</strong> 8 weeks</p>
                <p><strong>Level:</strong> Beginner</p>
                <p><strong>Format:</strong> Online & In-person</p>
                <p><strong>Price:</strong> $199</p>
                <p><strong>Instructor:</strong> Prof. Sarah Johnson</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/enrollment?course=Basic Music Theory&price=$199" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mr-4">
              Enroll Now
            </Link>
            <Link href="/courses" className="inline-block bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheoryPage

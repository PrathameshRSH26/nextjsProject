import React from 'react'
import Link from 'next/link'

const ProductionPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mb-6">
              Music Production
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Master the art of music production with industry-standard tools and professional techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Digital Audio Workstation (DAW) mastery
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Recording techniques and setup
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Mixing and mastering fundamentals
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Sound design and synthesis
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Professional industry workflows
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Course Details</h2>
              <div className="space-y-3 text-gray-300">
                <p><strong>Duration:</strong> 16 weeks</p>
                <p><strong>Level:</strong> Intermediate to Advanced</p>
                <p><strong>Format:</strong> Online & In-person</p>
                <p><strong>Price:</strong> $499</p>
                <p><strong>Instructor:</strong> Alex Thompson</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 mr-4">
              Enroll Now
            </button>
            <Link href="/courses" className="inline-block bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductionPage

import EnrollmentForm from '@/components/EnrollmentForm'
import React, { Suspense } from 'react'

const EnrollmentPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
      
      {/* Centered Form Content */}
      <div className="relative z-10 w-full">
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          <EnrollmentForm />
        </Suspense>
      </div>
    </div>
  )
}

export default EnrollmentPage

'use client';
import React from 'react'
import Blogs from './components/blogs'

const Homepage = () => {
  return (
    <div className='p-2 overflow-y-auto h-custom'>
      <Blogs />

      {/* footer */}
      <footer className="text-center pt-8 pb-5 text-gray-500 text-base w-full">
        <hr className="mb-4 border-t border-gray-200" />
        <div className='flex md:flex-row flex-col justify-center items-center gap-2'>
          <span className="font-semibold">Developer:</span> Maruf H.
          <span className="mx-2 md:block hidden">|</span>
          <a href="https://github.com/MarufAlAslam" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <span className="mx-2 md:block hidden">|</span>
          <a href="mailto:marufalaslam@gmail.com" className="hover:underline">marufalaslam@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
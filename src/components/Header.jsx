import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto pt-32 pb-20 flex flex-col items-center justify-start gap-3'>
      {/* Profile Image - MADE LARGER */}
      <div>
        <Image
          src="/assets/Mim_me.png"
          alt="Jannatul Afrose Mim"
          width={180}
          height={180}
          className="rounded-full w-44 border-4 border-gray-100 shadow-lg"
          priority
        />
      </div>

      {/* Greeting - REDUCED GAP */}
      <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-2 font-ovo text-gray-700'>
        Hi! I'm Jannatul Afrose Mim
        <Image 
          src="/assets/hand-icon.png" 
          alt="wave" 
          width={32} 
          height={32} 
          className='w-6 animate-waving-hand' 
        />
      </h3>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-bold leading-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        Passionate MERN Stack Developer
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl leading-relaxed">
        Turning ideas into elegant, responsive interfaces — combining frontend precision with backend logic to build thoughtful, scalable web experiences.
      </p>

      {/* NEW - Short Description */}
      <p className="text-sm text-gray-500 mt-2 max-w-xl italic">
  Welcome to <span className="font-bold text-gray-700 not-italic">meemnoir</span> — where creativity meets code, and every project tells a story of growth and problem-solving.
</p>

      {/* Call-to-Action Buttons - REDUCED GAP */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-5'>
        <a 
          href="#contact" 
          className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
        >
          Contact me
          <Image 
            src="/assets/right-arrow-white.png" 
            alt="" 
            width={16} 
            height={16} 
            className="w-4" 
          />
        </a>

        <a 
          href="/assets/sample-resume.pdf" 
          download 
          className="px-10 py-3 border-2 border-gray-500 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all"
        >
          My Resume
          <Image 
            src="/assets/download-icon.png" 
            alt="" 
            width={16} 
            height={16} 
            className="w-4" 
          />
        </a>
      </div>
    </div>
  )
}
import Image from 'next/image';
import React from 'react';
import { workData } from '../../public/assets/assets';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center mb-6">
        <span className="inline-block border-b-2 border-gray-400 pb-1 px-2">
          My portfolio
        </span>
      </h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Services designed to reshape how you see technology — with clarity, creativity, and impact.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay gradient for better readability */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>

            {/* Info Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 bg-white/95 backdrop-blur-sm rounded-lg py-3 px-4 flex items-center justify-between shadow-lg group-hover:bottom-8 transition-all duration-300">
              <div>
                <h2 className="font-semibold text-gray-900">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src="/assets/send-icon.png"
                  height={32}
                  width={32}
                  alt="Send icon"
                  className="w-4"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full px-4 py-2 mx-auto hover:bg-gray-100 transition"
      >
        Show more
        <Image
          src="/assets/right-arrow-bold.png"
          alt="Right arrow"
          className="w-4"
          width={16}
          height={16}
        />
      </a>
    </div>
  );
};

export default Work;

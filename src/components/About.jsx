import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import { infoList, toolsData } from "../../public/assets/assets";
import webdevAnimation from "../../public/assets/Animated Dashboards.json";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>
      <div className="w-16 h-[2px] bg-gray-300 mx-auto mt-2 mb-6" />

      {/* Two-column Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14 mt-12">
        {/* Left Column - Lottie Animation */}
        <div className="w-72 sm:w-80 md:w-96 flex justify-center border border-gray-200 rounded-xl shadow-sm p-4">
          <Lottie animationData={webdevAnimation} loop={true} className="w-full h-auto" />
        </div>

        {/* Right Column - Description + Info */}
        <div className="flex-1 flex flex-col items-center text-center">
          {/* About Description */}
          <p className="text-base text-gray-600 mt-3 max-w-2xl leading-relaxed">
            I’m a creative developer who loves blending design with logic to craft
            seamless digital experiences. On the{" "}
            <span className="font-medium text-gray-800">frontend</span>, I work with{" "}
            <span className="text-sky-300">React, Redux, Next.js, Framer Motion</span>,{" "}
            and <span className="text-sky-300">LottieFiles</span> to build dynamic,
            animated, and performance-driven interfaces. On the{" "}
            <span className="font-medium text-gray-800">backend</span>, I use{" "}
            <span className="text-sky-300">Express.js, MongoDB</span>, and{" "}
            <span className="text-sky-300">Mongoose</span> to create structured,
            scalable APIs. I’ve also integrated{" "}
            <span className="text-sky-300">Stripe</span> for secure and intuitive
            payment solutions. My goal is to transform thoughtful ideas into
            functional, meaningful, and visually compelling web applications.
          </p>

          {/* Info Cards Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-10">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <Image src={icon} alt={title} width={32} height={32} className="mb-3" />
                  <h3 className="font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="mt-8 text-lg font-semibold text-gray-800">Tools I Use</h4>
          <ul className="flex items-center justify-center gap-4 mt-3 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="p-2 rounded-md bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Image src={tool} alt={`tool-${index}`} width={28} height={28} className="w-7 h-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
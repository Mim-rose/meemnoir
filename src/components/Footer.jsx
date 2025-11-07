import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full px-[12%] py-10 bg-white border-t border-gray-300">
      {/* Top Row: Logo + Email + Socials */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
        {/* Logo on the left */}
        <Image
          src="/assets/logofin.png"
          width={100}
          height={50}
          alt="Logo"
          className="cursor-pointer"
          priority
        />

        {/* Email in center */}
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <Image src="/assets/mail_icon.png" alt="Mail icon" width={24} height={24} className="w-6" />
            <a
            href="mailto:mimafrose99@gmail.com"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            mimafrose99@gmail.com
          </a>
          
        </div>

        {/* Social links on the right */}
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          <a
            href="https://github.com/Mim-rose"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <FaGithub className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jannatul-afrose-mim-a75158334"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="text-center text-sm text-gray-600">
        © 2025 Meem. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
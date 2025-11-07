"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[80px] md:h-[100px] lg:h-[110px] z-10 overflow-hidden">
        <Image
          src="/assets/header-bg-color.png"
          alt="Header background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 transition-all duration-300 ${
          isScroll ? "bg-white/80 shadow-md backdrop-blur-sm dark:bg-darkTheme/80" : ""
        }`}
      >
        {/* Logo */}
        <a href="/">
          <Image
            src="/assets/logofin.png"
            width={120}
            height={60}
            alt="Logo"
            className="cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-6 md:px-12 py-3 bg-white dark:bg-darkTheme shadow-md bg-opacity-50">
          <li><a className="font-ovo hover:text-darkHover transition" href="#top">Home</a></li>
          <li><a className="font-ovo hover:text-darkHover transition" href="#about">About me</a></li>
          <li><a className="font-ovo hover:text-darkHover transition" href="#services">Services</a></li>
          <li><a className="font-ovo hover:text-darkHover transition" href="#work">My work</a></li>
          <li><a className="font-ovo hover:text-darkHover transition" href="#contact">Contact me</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-20">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle Theme"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <Image
              src={isDarkMode ? "/assets/sun_icon.png" : "/assets/moon_icon.png"}
              alt="Theme Toggle"
              width={20}
              height={20}
              className="w-11 h-11 bg-gray-50 dark:bg-darkTheme rounded-md p-2 border-gray-300 border-2 shadow-md hover:shadow-lg hover:bg-gray-100 dark:hover:bg-darkHover transition"
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-darkHover rounded-md text-darkHover hover:bg-lightHover transition"
          >
            Contact
            <Image
              src="/assets/arrow-icon.png"
              alt="Arrow"
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </a>

          {/* Mobile Menu Button */}
          <button onClick={openMenu} className="block md:hidden">
            <Image
              src="/assets/menu-black.png"
              alt="Menu"
              width={24}
              height={24}
              className="w-8 h-8"
            />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkTheme transition-all duration-500"
          style={{ transform: "translateX(16rem)" }}
        >
          <div className="absolute top-6 right-6">
            <button onClick={closeMenu}>
              <Image
                src="/assets/close-black.png"
                alt="Close Menu"
                width={24}
                height={24}
                className="w-8 h-8"
              />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <li><a onClick={closeMenu} href="#top" className="font-ovo hover:text-darkHover transition">Home</a></li>
          <li><a onClick={closeMenu} href="#about" className="font-ovo hover:text-darkHover transition">About me</a></li>
          <li><a onClick={closeMenu} href="#services" className="font-ovo hover:text-darkHover transition">Services</a></li>
          <li><a onClick={closeMenu} href="#work" className="font-ovo hover:text-darkHover transition">My work</a></li>
          <li><a onClick={closeMenu} href="#contact" className="font-ovo hover:text-darkHover transition">Contact me</a></li>
        </ul>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

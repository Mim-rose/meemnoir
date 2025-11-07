import React from 'react';
import { serviceData } from '../../public/assets/assets';
import Image from 'next/image';

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-6">
  <span className="inline-block border-b-2 border-gray-400 pb-1 px-2">
    What I Offer
  </span>
</h4>
 <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Services designed to reshape how you see technology — with clarity, creativity, and impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lighthover hover:-translate-y-1 transition duration-500"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image src="/assets/right-arrow.png" height={32} width={32} alt="arrow" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
"use client";

import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [hoveredService, setHoveredService] = useState('');

  return (
    <div className="min-h-screen">


      {/* Hero Section with Asset SVG */}
      <section className="relative py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Mobile: Image appears first, Desktop: Left Content */}
          <div className="order-2 lg:order-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:col-span-1">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                  <span className="text-3xl lg:text-4xl font-normal text-gray-600">Turn Your Spaces into</span>
                  <br />
                  <span className="text-5xl lg:text-7xl">Brand Stories</span>
                </h1>
                <p className="text-xl text-green-600 font-semibold">Powered by BATAL HEROES</p>
              </div>

              {/* Color Strip Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/Group.svg"
                  alt="Color Strip"
                  width={300}
                  height={10}
                  className="h-2 w-auto"
                />
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Design Advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Suggestion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">Free Quote</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a 
                  href="https://wa.me/971588929900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors cursor-pointer inline-block"
                >
                  [GET IN TOUCH]
                </a>
                <div className="w-16 h-0.5 bg-black mt-2"></div>
                <p className="text-lg text-gray-600 mt-2">For Free Consultation</p>
              </div>
            </div>

          </div>
          
          {/* Mobile: Image appears first, Desktop: Right Content */}
          <div className="order-1 lg:order-2 relative w-full h-full lg:col-span-1">
            <Image
              src="/images/Hero.svg"
              alt="Asset SVG"
              width={1500}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-green-800 py-12 relative">
        {/* Circular Images - Positioned to overlap with hero section - Hidden on mobile */}
        <div className="hidden lg:block absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="grid grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Group (1).png"
                  alt="Illuminated SIOUX Sign"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Group (2).png"
                  alt="Retail Space Interior"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/Group (3).png"
                  alt="Signage Components"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">

          {/* Services List */}
          <div className="text-center mb-6">
            <div className="flex flex-wrap justify-center items-center gap-4 text-white text-2xl font-bold">
              <span>Signboards</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Vinyl Graphics</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Wayfinding</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Hoardings</span>
              <div className="w-px h-8 bg-white"></div>
              <span>Kids Room Makeovers</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-center text-white text-lg max-w-4xl mx-auto mb-6">
            <p>
              Our expert team fabricates and installs customized 3D letter signs, illuminated shopfronts, and wayfinding systems across Dubai and Sharjah
            </p>
          </div>

          {/* Colored Line */}
          {/* <div className="flex justify-center space-x-1">
            <div className="w-8 h-2 bg-red-500"></div>
            <div className="w-8 h-2 bg-black"></div>
            <div className="w-8 h-2 bg-green-500"></div>
            <div className="w-8 h-2 bg-yellow-400"></div>
          </div> */}
        </div>
      </section>

      {/* Image Collage Section */}
      <section className="bg-white">
        {/* Four Images in One Row - Responsive for mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          <div className="w-full h-[300px] lg:h-[458px] overflow-hidden">
            <Image
              src="/images/01.svg"
              alt="CUZCO RESTAURANT Sign"
              width={360}
              height={458}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[300px] lg:h-[458px] overflow-hidden">
            <Image
              src="/images/02.svg"
              alt="ILIO Sign with Cherub"
              width={360}
              height={458}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[300px] lg:h-[458px] overflow-hidden">
            <Image
              src="/images/03.svg"
              alt="CONNECT AI Illuminated Sign"
              width={360}
              height={458}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[300px] lg:h-[458px] overflow-hidden">
            <Image
              src="/images/04.svg"
              alt="Modern Building with ILIO Display"
              width={360}
              height={458}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Services Strip Image at Bottom */}
        <div className="w-full">
          <Image
            src="/images/services strip.png"
            alt="Services Strip"
            width={1920}
            height={4}
            className="w-full h-1 object-cover"
          />
        </div>
      </section>

      {/* BATAL Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="border-1 border-green-500 rounded-full px-4 py-1">
                  <h2 className="text-[20px] lg:text-[26px] font-bold"><i className="text-green-800">BATAL</i> Service</h2>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[14px] lg:text-[16px] text-gray-700 leading-relaxed">
                  BATAL is a top-rated signage company in Dubai, offering custom signage solutions for businesses across the UAE.<br /> We specialize in illuminated signs, 3D letter signage, and glass & vinyl decals to wayfinding systems, hoardings, and vehicle branding. Our expert team designs, fabricates, and installs signs for shops, malls, buildings, offices, restaurants, and more with fast delivery and durable results. Trust BATAL for high-impact visual branding.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-x-8 lg:gap-y-8 mt-4">
                  {/* Row 1 - 2 services */}
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">Illuminated Signs</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">Energy-efficient LED and backlit signs for shops, restaurants, and offices. Durable and suitable for high-traffic areas and 24/7 exposure in Dubai and Sharjah.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">Glass & Vinyl Signs</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">Upgrade interiors or storefronts with vinyl decals, glass frosting, and logo stickers. Weatherproof, removable, and perfect for branding in offices, cafes, or retail spaces.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                  
                  {/* Row 2 - 2 services */}
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">3D Letters</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">3D letter signs in acrylic, metal, or wood—ideal for shopfronts, offices, and receptions. Custom design, premium finishes, and long-lasting quality across the UAE.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">Pylon/Hoardings</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">Large pylon signs and construction hoardings built to Dubai Municipality standards. Ideal for developers, real estate, and outdoor advertising.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                  
                  {/* Row 3 - 2 services */}
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">Wayfinding & Directionals</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">Clear, custom wayfinding signage for malls, offices, hospitals, and buildings. Designed for function, brand consistency, and professional installation across Dubai.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-[11px] lg:text-[16px] text-gray-900 font-semibold">Vehicle Branding</h3>
                    <p className="text-gray-600 text-[9px] lg:text-[12px] leading-relaxed">Turn cars, vans, and bikes into mobile ads with custom vehicle wraps and branding stickers. Ideal for delivery fleets and service vehicles across the UAE.</p>
                    <Image
                      src="/images/services batal strip.png"
                      alt="Services Strip"
                      width={147}
                      height={4}
                      className="w-[80px] lg:w-[147px] h-[2px] lg:h-[4px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4">Custom-made signs for Shops, Offices, Buildings</h2>
                <p className="text-lg lg:text-2xl text-green-600 italic">Looking for a trusted signage company in Dubai?</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/Group (6).png"
                    alt="DARWISH CAFE Interior"
                    width={343}
                    height={275}
                    className="rounded-lg shadow-lg object-cover w-full lg:w-[343px] h-[200px] lg:h-[275px]"
                  />
                  <div className="flex flex-row gap-2">
                    <Image
                    src="/images/Rectangle 8.png"
                    alt="Circular Ornate Sign"
                    width={166}
                    height={210}
                      className="rounded-lg shadow-lg object-cover w-full lg:w-[140px] h-[150px] lg:h-[210px]"
                  />
                  <Image
                    src="/images/Rectangle 9.png"
                    alt="Circular Ornate Sign"
                    width={166}
                    height={210}
                      className="rounded-lg shadow-lg object-cover w-full lg:w-[140px] h-[150px] lg:h-[210px]"
                  />
                  </div>
                </div>
                <div className="space-y-4">
                  <Image
                    src="/images/Group (2).png"
                    alt="Modern Building with Banners"
                    width={258}
                    height={500}
                    className="rounded-lg shadow-lg object-cover w-full lg:w-[258px] h-[300px] lg:h-[497px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Visualization Before Production Section */}
      <section className="bg-white">
        {/* Top Services Strip */}
        <div className="w-full">
          <Image
            src="/images/services strip.png"
            alt="Services Strip"
            width={1920}
            height={4}
            className="w-full h-1 object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 italic">Complete Visualization Before Production</h2>
                <h3 className="text-3xl font-bold text-gray-800 italic">Help you take Better Decision</h3>
                <p className="text-xl text-green-600 italic">Looking for a trusted signage company in Dubai?</p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At BATAL, we help you make confident decisions with realistic design visualizations tailored to your space. Whether it&apos;s a shopfront, hanging sign, or directional signage, we provide detailed design previews including materials, lighting style, and mounting so you know exactly what to expect before fabrication begins. Just like the sample below, we offer true-to-scale mockups to align your vision with the final result.
                </p>
              </div>
            </div>

            {/* Right Content - Three Graphics */}
            <div className="flex flex-col items-center gap-6">
  {/* Row with first two images */}
  <div className="flex flex-col items-center gap-6">
  {/* First row with two images */}
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <Image
        src="/images/box.png"
                  alt="Group 10"
        width={250}
        height={200}
        className="w-[250px] h-[200px] object-cover"
                />
              </div>
              
              <div className="text-center">
                <Image
        src="/images/box2.png"
                  alt="Group 11"
        width={250}
        height={200}
        className="w-[250px] h-[200px] object-cover"
      />
    </div>
  </div>

  {/* Second row with two images */}
  <div className="flex items-center justify-center gap-8">
    <div className="text-center">
      <Image
        src="/images/box1.png"
        alt="Rectangle 1"
        width={250}
        height={200}
        className="w-[250px] h-[200px] object-cover"
                />
              </div>
              
              <div className="text-center">
                <Image
        src="/images/car.png"
        alt="Rectangle 2"
        width={250}
        height={200}
        className="w-[250px] h-[200px] object-cover"
                />
              </div>
            </div>
</div>

</div>

          </div>
        </div>
        
        {/* Bottom Services Strip */}
        <div className="w-full">
          <Image
            src="/images/services strip.png"
            alt="Services Strip"
            width={1920}
            height={4}
            className="w-full h-1 object-cover"
          />
        </div>
              </section>
        
        {/* BATAL Services List Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Services List */}
              <div className="space-y-12">
                <div className="space-y-10">
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('illuminated')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Illuminated Signage</span>
                    </div>
                  </div>
                  
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('vinyl')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Vinyl & Frosted Sticker</span>
                    </div>
                  </div>
                  
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('services')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Services</span>
                    </div>
                  </div>
                  
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('hoardings')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Pylon Hoardings</span>
                    </div>
                  </div>
                  
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('wayfinding')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Wayfinding</span>
                    </div>
                  </div>
                  
                  <div 
                    className="text-[26px] font-bold hover:bg-[#E9E9E9] hover:px-6 hover:py-2 rounded-4xl transition-all duration-700 ease-in-out cursor-pointer group relative"
                    onMouseEnter={() => setHoveredService('vehicle')}
                    onMouseLeave={() => setHoveredService('')}
                  >
                    <div className="flex items-center">
                      <svg 
                        className="w-6 h-6 text-transparent group-hover:text-green-600 transition-all duration-700 ease-in-out mr-3 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span><i className="text-green-600"> BATAL</i> Vehicle Branding</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image - Dynamic based on hovered service */}
              <div className="text-center">
                <Image
                  src={
                    hoveredService === 'illuminated' ? "/images/box1.png" :
                    hoveredService === 'vinyl' ? "/images/box2.png" :
                    hoveredService === 'services' ? "/images/box1.png" :
                    hoveredService === 'hoardings' ? "/images/box2.png" :
                    hoveredService === 'wayfinding' ? "/images/box1.png" :
                    hoveredService === 'vehicle' ? "/images/box2.png" :
                    "/images/Rectangle 11.png" // Default image
                  }
                  alt={
                    hoveredService === 'illuminated' ? "Illuminated Signage" :
                    hoveredService === 'vinyl' ? "Vinyl & Frosted Sticker" :
                    hoveredService === 'services' ? "BATAL Services" :
                    hoveredService === 'hoardings' ? "Pylon Hoardings" :
                    hoveredService === 'wayfinding' ? "Wayfinding" :
                    hoveredService === 'vehicle' ? "Vehicle Branding" :
                    "3D Nike Logo"
                  }
                  width={700}
                  height={600}
                  className="mx-auto object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
          <Image
            src="/images/services strip.png"
            alt="Services Strip"
            width={1920}
            height={4}
            className="w-full h-1 mt-16 object-cover"
          />
          </div>
        </section>
        
        {/* Product Showcase Section */}
        <section className="bg-white">    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 2x4 Grid of Signage Images - 2 per row on mobile, 4 per row on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 1 - Image 1 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (1).jpeg"
                  alt="Offices Signage"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] md:w-[300px] md:h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base md:font-medium text-gray-800 whitespace-pre-line">
  OFFICE SIGNAGE
  <br />
  (acrylic letters, backlit, 3D logos for corporate offices)
</p>
            </div>

            {/* Row 1 - Image 2 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (3).jpg"
                  alt="Retail Shop Front Sign"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line">Retail / Shopfront Signage
              (restaurants, cafes, boutiques – like the Darwish Cafe example)</p>
            </div>

            {/* Row 1 - Image 3 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (2).jpg"
                  alt="Digital Display"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line">Digital Screens
              <br />
              (interactive kiosks, LED displays, menu boards)</p>
            </div>

            {/* Row 1 - Image 4 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (4).jpg"
                  alt="Offices Signage"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line">Digital Screens
                <br />
              (interactive kiosks, LED displays, menu boards)</p>
            </div>

            {/* Row 2 - Image 1 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (2).jpeg"
                  alt="Offices Signage"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line">Vinyl Graphics & Wall Art
              <br />
                  (custom vinyl installation, wallpapers, creative wall branding)</p>
            </div>

            {/* Row 2 - Image 2 */}
            <div className="text-center">
              <div className="mb-3">
             <Image
                  src="/images/Section Services (1).png"
                  alt="Offices Signage"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line"> Vehicle Branding
              <br />
              (car wraps, delivery vans, fleet graphics)</p>
            </div>

            {/* Row 2 - Image 3 */}
            <div className="text-center">
              <div className="text-center">
                <div className="mb-3">
                  <Image
                    src="/images/Section Services (1).jpg"
                    alt="Offices Signage"
                    width={300}
                    height={300}
                    className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                  />
                </div>
                <p className="text-base font-medium text-gray-800 whitespace-pre-line"> Flags & Promotional Stands
                  <br />
                (roll-up banners, fabric flags, event displays)</p>
              </div>
            </div>

            {/* Row 2 - Image 4 */}
            <div className="text-center">
              <div className="mb-3">
                <Image
                  src="/images/Section Services (2).png"
                  alt="Offices Signage"
                  width={300}
                  height={300}
                  className="w-[300px] h-[150px] object-cover rounded-[40px] border-2 border-green-600"
                />
              </div>
              <p className="text-base font-medium text-gray-800 whitespace-pre-line">Wayfinding & Interior Branding 
              <br />
                (wall logos, directional signage)</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Services Strip */}
        <div className="w-full">
          <Image
            src="/images/services strip.png"
            alt="Services Strip"
            width={1920}
            height={4}
            className="w-full h-1 object-cover"
          />
        </div>
      </section>
    </div>
  );
}

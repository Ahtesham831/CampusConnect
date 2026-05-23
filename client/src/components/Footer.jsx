import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-950 border-t border-gray-900 px-6 sm:px-16 xl:px-32 text-gray-400'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 py-16 border-b border-gray-900'>

        {/* Logo and Description Section */}
        <div className='max-w-md'>
          <img src={assets.logo_light} alt="logo" className='w-32 sm:w-40'/>
          <p className='mt-6 text-sm leading-relaxed text-gray-500 font-light'>
            CampusConnect is the official student blogging platform of our college. Share your stories, academic insights, campus adventures, event highlights, and career journeys with the student community.
          </p>
        </div>

        {/* Footer Link Sections */}
        <div className='flex flex-wrap justify-between w-full lg:w-[50%] gap-8'>
          {footer_data.map((section, index)=> (
            <div key={index} className='min-w-[140px]'>
              <h4 className='font-bold text-xs uppercase tracking-wider text-gray-300 mb-5'>{section.title}</h4>
              <ul className='space-y-3.5'>
                {section.links.map((link, i)=> (
                  <li key={i}>
                    <a 
                      href="#" 
                      className='text-sm text-gray-500 hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 font-light'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Copyright Footer Bar */}
      <div className='max-w-7xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-light'>
        <p>Copyright 2025 © CampusConnect - All Rights Reserved.</p>
        <div className='flex gap-6'>
          <a href="#" className='hover:text-gray-500 transition-colors'>Privacy Policy</a>
          <a href="#" className='hover:text-gray-500 transition-colors'>Terms of Service</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

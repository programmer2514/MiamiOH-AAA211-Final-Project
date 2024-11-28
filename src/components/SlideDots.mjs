import React, { useContext } from 'react';

import { PageContext } from '..';

export default function SlideDots() {
  const page = useContext(PageContext);

  return (page.includes('Article'))
    ? (<></>)
    : (
        <div className="fixed top-body/2-f flex flex-col items-end right-3 -translate-y-1/2 z-30 *:bg-zinc-100 max-lg:landscape:top-body/2">
          <a
            className="block w-3 h-3 opacity-10 rounded-md z-50 mx-4 my-2 transition-all duration-100 hover:w-20 focus-visible:w-20 after:content-['Home'] hover:h-10 hover:opacity-75 hover:drop-shadow-md focus-visible:h-10 focus-visible:opacity-75 focus-visible:drop-shadow-md after:text-zinc-900 after:py-2 after:px-4 after:absolute after:block after:opacity-0 after:pointer-events-none hover:after:opacity-100 focus-visible:after:opacity-100"
            style={{
              opacity: (page === 'Home') ? '0.75' : '',
            }}
            href="#"
            aria-label="Home (Slideshow dot button)"
          >
          </a>
          <a
            className="block w-3 h-3 opacity-10 rounded-md z-50 mx-4 my-2 transition-all duration-100 hover:w-20 focus-visible:w-20 after:content-['About'] hover:h-10 hover:opacity-75 hover:drop-shadow-md focus-visible:h-10 focus-visible:opacity-75 focus-visible:drop-shadow-md after:text-zinc-900 after:py-2 after:px-4 after:absolute after:block after:opacity-0 after:pointer-events-none hover:after:opacity-100 focus-visible:after:opacity-100"
            style={{
              opacity: (page === 'About') ? '0.75' : '',
            }}
            href="#about"
            aria-label="About (Slideshow dot button)"
          >
          </a>
          <a
            className="block w-3 h-3 opacity-10 rounded-md z-50 mx-4 my-2 transition-all duration-100 hover:w-28 focus-visible:w-28 after:content-['Resources'] hover:h-10 hover:opacity-75 hover:drop-shadow-md focus-visible:h-10 focus-visible:opacity-75 focus-visible:drop-shadow-md after:text-zinc-900 after:py-2 after:px-4 after:absolute after:block after:opacity-0 after:pointer-events-none hover:after:opacity-100 focus-visible:after:opacity-100"
            style={{
              opacity: (page === 'Resources') ? '0.75' : '',
            }}
            href="#resources"
            aria-label="Resources (Slideshow dot button)"
          >
          </a>
          <a
            className="block w-3 h-3 opacity-10 rounded-md z-50 mx-4 my-2 transition-all duration-100 hover:w-[8.625rem] focus-visible:w-[8.625rem] after:content-['Media_Bundle'] hover:h-10 hover:opacity-75 hover:drop-shadow-md focus-visible:h-10 focus-visible:opacity-75 focus-visible:drop-shadow-md after:text-zinc-900 after:py-2 after:px-4 after:absolute after:block after:opacity-0 after:pointer-events-none hover:after:opacity-100 focus-visible:after:opacity-100"
            style={{
              opacity: (page === 'Media Bundle') ? '0.75' : '',
            }}
            href="#media-bundle"
            aria-label="Media Bundle (Slideshow dot button)"
          >
          </a>
          <a
            className="block w-3 h-3 opacity-10 rounded-md z-50 mx-4 my-2 transition-all duration-100 hover:w-16 focus-visible:w-16 after:content-['FAQ'] hover:h-10 hover:opacity-75 hover:drop-shadow-md focus-visible:h-10 focus-visible:opacity-75 focus-visible:drop-shadow-md after:text-zinc-900 after:py-2 after:px-4 after:absolute after:block after:opacity-0 after:pointer-events-none hover:after:opacity-100 focus-visible:after:opacity-100"
            style={{
              opacity: (page === 'FAQ') ? '0.75' : '',
            }}
            href="#faq"
            aria-label="FAQ (Slideshow dot button)"
          >
          </a>
        </div>
      );
}

import React, { useContext } from 'react';

import { PageContext } from '..';

export default function SlideDots() {
  const page = useContext(PageContext);

  return (page.includes('Article'))
    ? (<></>)
    : (
      <div className="fixed top-body/2 right-3 -translate-y-1/2 z-30 *:bg-zinc-400">
        <a
          className="block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50"
          style={{
            opacity: (page === 'Home') ? '1' : '',
          }}
          href="#"
          aria-label="Home (Slideshow dot button)"
        >
        </a>
        <a
          className="block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50"
          style={{
            opacity: (page === 'About') ? '1' : '',
          }}
          href="#about"
          aria-label="About (Slideshow dot button)"
        >
        </a>
        <a
          className="block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50"
          style={{
            opacity: (page === 'Resources') ? '1' : '',
          }}
          href="#resources"
          aria-label="Resources (Slideshow dot button)"
        >
        </a>
        <a
          className="block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50"
          style={{
            opacity: (page === 'Media Bundle') ? '1' : '',
          }}
          href="#media-bundle"
          aria-label="Media Bundle (Slideshow dot button)"
        >
        </a>
        <a
          className="block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50"
          style={{
            opacity: (page === 'FAQ') ? '1' : '',
          }}
          href="#faq"
          aria-label="FAQ (Slideshow dot button)"
        >
        </a>
      </div>
      );
}

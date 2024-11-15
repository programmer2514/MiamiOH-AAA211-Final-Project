import React from 'react';

export default function SlideDots({ page, setPage }) {
  return (
    <div className='fixed top-1/2 right-0 -translate-y-1/2 *:bg-gray-400'>
      <a
        className='block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50'
        style={{
          opacity: (page === 'Home') ? '1' : ''
        }}
        href='#'
        aria-label='Home (Slideshow dot button)'
        onClick={ () => { setPage('Home'); } }
      ></a>
      <a
        className='block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50'
        style={{
          opacity: (page === 'About') ? '1' : ''
        }}
        href='#about'
        aria-label='About (Slideshow dot button)'
        onClick={ () => { setPage('About'); } }
      ></a>
      <a
        className='block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50'
        style={{
          opacity: (page === 'Resources') ? '1' : ''
        }}
        href='#resources'
        aria-label='Resources (Slideshow dot button)'
        onClick={ () => { setPage('Resources'); } }
      ></a>
      <a
        className='block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50'
        style={{
          opacity: (page === 'Media Bundle') ? '1' : ''
        }}
        href='#media-bundle'
        aria-label='Media Bundle (Slideshow dot button)'
        onClick={ () => { setPage('Media Bundle'); } }
      ></a>
      <a
        className='block w-3 h-3 opacity-25 rounded-full z-50 m-4 hover:opacity-50 focus-visible:opacity-50'
        style={{
          opacity: (page === 'FAQ') ? '1' : ''
        }}
        href='#faq'
        aria-label='FAQ (Slideshow dot button)'
        onClick={ () => { setPage('FAQ'); } }
      ></a>
    </div>
  );
}

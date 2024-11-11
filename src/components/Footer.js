import React from 'react';

export default function Footer({ year, holder, tabIndex, links, children }) {
  return (
    <div className='bg-gray-200 drop-shadow-sm sticky bottom-0 min-w-full portrait:static'>
      <a
        className='absolute top-0 left-0 -z-10 bg-white border-2 border-black px-4 py-2 transition duration-200 -translate-y-full -translate-x-full focus:translate-x-0'
        role='button'
        tabIndex={tabIndex}
        href='#head'
      >
        Back to Top
      </a>
      <div className='text-black flex items-center max-w-7xl m-auto px-8 py-4 portrait:flex-col'>
        <p>
          Copyright &copy; {year} {holder}
        </p>
        <span className='grow' role='none' />
        <div className='flex text-gray-400 portrait:mt-4'>
          {children}
        </div>
        <span className='grow' role='none' />
        <div className='flex'>
          {links}
        </div>
      </div>
    </div>
  )
}
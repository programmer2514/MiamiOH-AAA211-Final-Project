import React from 'react';

export default function Header({ image, title, tabIndex, links }) {
  return (
    <>
      <a
        className='absolute top-0 left-0 z-20 bg-white border-2 border-black px-4 py-2 transition duration-200 -translate-y-full focus:translate-y-0'
        role='button'
        tabIndex={tabIndex}
        href='#main'
      >
        Skip to Content
      </a>
      <div className='bg-gray-200 sticky top-0 min-w-full drop-shadow-sm z-10 portrait:static'>
        <div className='flex items-center max-w-7xl m-auto px-8 py-4 portrait:flex-col'>
          <a
            id='head'
            className='flex items-center portrait:flex-col'
            role='button'
            tabIndex={tabIndex}
            href='#'
          >
            <img
              className='w-16'
              alt=''
              role='none'
              src={image}
            />
            <h1 className='font-bold text-3xl ml-3 portrait:text-center portrait:ml-0 portrait:mt-2'>
              {title}
            </h1>
          </a>
          <span className='grow' role='none' />
            {links}
        </div>
      </div>
    </>
  )
}
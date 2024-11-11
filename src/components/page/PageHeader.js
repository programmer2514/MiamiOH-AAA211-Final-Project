import React from 'react';

export default function Header({ image, title, setPage }) {
  return (
    <div className='bg-gray-200 min-w-full drop-shadow-sm'>
      <div className='flex items-center max-w-7xl m-auto px-8 py-4 portrait:flex-col'>
        <img
          className='w-12'
          alt=''
          role='none'
          src={image}
        />
        <h1 className='font-bold text-3xl ml-3 portrait:text-center portrait:ml-0'>
          {title}
        </h1>
        <span className='grow portrait:mt-2' role='none' />
          <a
            className={'ml-4 inline-block active:opacity-75 after:block after:h-[2px] after:content-[\'\'] after:bottom-0 after:left-1/2 after:relative after:bg-black after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0 portrait:ml-0 portrait:mt-2'}
            href='#cards'
            onClick={() => { setPage('') }}
          >
            Back to Main Page
          </a>
      </div>
    </div>
  )
}
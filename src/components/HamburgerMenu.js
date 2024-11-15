import React, { useState } from 'react';

import LinkSelector from './LinkSelector';

export default function HamburgerMenu({ page, setPage }) {

  const [isChecked, setIsChecked] = useState(false)

  const tabIndex = (isChecked) ? '0' : '-1';

  return (
    <div className='w-8 h-7 m-4 flex flex-col justify-around'>

      <input
        className='absolute w-8 h-8 z-50 appearance-none peer/hamburger'
        type="checkbox"
        role='button'
        aria-label='Main Menu'
        checked={ isChecked }
        onChange={ () => { setIsChecked(!isChecked); } }
        aria-expanded={ isChecked }
      />

      <div className='block h-1 w-full rounded-full bg-[#181818] transition-transform peer-checked/hamburger:rotate-45 peer-checked/hamburger:translate-y-[0.625rem]' role='presentation'></div>
      <div className='block h-1 w-full rounded-full bg-[#181818] transition-transform peer-checked/hamburger:scale-y-0' role='presentation'></div>
      <div className='block h-1 w-full rounded-full bg-[#181818] transition-transform peer-checked/hamburger:-rotate-45 peer-checked/hamburger:-translate-y-[0.5rem]' role='presentation'></div>
      
      <nav className='fixed right-0 top-28 z-30 h-[calc(100vh-10.5rem)] w-[28rem] max-w-full py-4 px-10 translate-x-full transition-transform bg-[#181818] text-white text-2xl pointer-events-none peer-checked/hamburger:translate-x-0 peer-checked/hamburger:pointer-events-auto' aria-hidden={ !isChecked }>

        <a
          className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800]'
          href='#'
          aria-label='Home'
          onClick={ () => {
            setPage('Home');
            setIsChecked(false);
          } }
          tabIndex={ tabIndex }
        >
          <LinkSelector page={ page } pageReq='Home' />
        </a>
        
        <a
          className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800]'
          href='#about'
          aria-label='About'
          onClick={ () => {
            setPage('About');
            setIsChecked(false);
          } }
          tabIndex={ tabIndex }
        >
          <LinkSelector page={ page } pageReq='About' />
        </a>
        
        <a
          className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800]'
          href='#resources'
          aria-label='Resources'
          onClick={ () => {
            setPage('Resources');
            setIsChecked(false);
          } }
          tabIndex={ tabIndex }
        >
          <LinkSelector page={ page } pageReq='Resources' />
        </a>
        
        <a
          className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800]'
          href='#media-bundle'
          aria-label='Media Bundle'
          onClick={ () => {
            setPage('Media Bundle');
            setIsChecked(false);
          } }
          tabIndex={ tabIndex }
        >
          <LinkSelector page={ page } pageReq='Media Bundle' />
        </a>
        
        <a
          className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800]'
          href='#faq'
          aria-label='FAQ'
          onClick={ () => {
            setPage('FAQ');
            setIsChecked(false);
          } }
          tabIndex={ tabIndex }
        >
          <LinkSelector page={ page } pageReq='FAQ' />
        </a>

        <div className='absolute bottom-4 left-0 w-full flex justify-around flex-row flex-wrap text-xl'>

          <a
            className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800] after:block after:h-[2px] after:content-[""] after:bottom-0 after:left-1/2 after:relative after:bg-[#fcb800] after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0'
            href='//github.com/programmer2514/MiamiOH-AAA211-Final-Project/tree/main/src'
            target='_blank'
            rel='noreferrer'
            aria-label='View Source (Opens in a new window)'
            tabIndex={ tabIndex }
          >
            View Source
          </a>

          <a
            className='block p-4 hover:text-[#fcb800] focus-visible:text-[#fcb800] after:block after:h-[2px] after:content-[""] after:bottom-0 after:left-1/2 after:relative after:bg-[#fcb800] after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0'
            href='//programmer2514.github.io/'
            target='_blank'
            rel='noreferrer'
            aria-label='View Source (Opens in a new window)'
            tabIndex={ tabIndex }
          >
            My Projects
          </a>

        </div>

      </nav>

      <a
        className='fixed left-0 top-28 h-[calc(100vh-10.5rem)] w-full z-20 opacity-0 transition-opacity bg-[#181818] pointer-events-none peer-checked/hamburger:opacity-50 peer-checked/hamburger:pointer-events-auto'
        role='presentation'
        tabIndex='-1'
        onClick={ () => { setIsChecked(false); } }>
      </a>

    </div>
  );
}

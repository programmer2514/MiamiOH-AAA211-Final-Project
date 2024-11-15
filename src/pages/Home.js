import React, { useEffect } from 'react';

import Background from './../images/Background.png';
import LinkSelector from './../components/LinkSelector';

export default function Home({ page, setPage, className }) {

  useEffect(() => {
    document.getElementById('h1').classList.add('opacity-0', '-translate-x-1/2');
    document.getElementById('p').classList.add('opacity-0');
    document.getElementById('bg').classList.add('!-translate-y-0');
    document.getElementById('a').classList.add('opacity-0');
    setTimeout(() => {
      document.getElementById('h1').classList.remove('opacity-0', '-translate-x-1/2');
      document.getElementById('p').classList.remove('opacity-0');
      document.getElementById('bg').classList.remove('!-translate-y-0');
      document.getElementById('a').classList.remove('opacity-0');
    }, 10);
  }, [page]);

  //from-[#6a14d1] to-[#c82090] bg-gradient-to-br
  return (
    <main
      id='content'
      className={className + ' bg-[#181818] flex flex-wrap items-center justify-center content-center portrait:items-start'}
    >
      <svg
        className='fixed top-0 left-0 w-full h-screen brightness-50 z-0'
        viewBox='0 0 1362.55 1080'
        preserveAspectRatio='none'
        role='presentation'
      >
        <polygon style={{ fill: '#ce727f' }} points='1362.55 1080 1214.75 1080 591.21 0 739.01 0 1362.55 1080'/>
        <polygon style={{ fill: '#eee077' }} points='1214.75 1080 1066.94 1080 443.41 0 591.21 0 1214.75 1080'/>
        <polygon style={{ fill: '#ffffff' }} points='1066.94 1080 919.14 1080 295.61 0 443.41 0 1066.94 1080'/>
        <polygon style={{ fill: '#7ac1df' }} points='919.14 1080 771.34 1080 147.8 0 295.61 0 919.14 1080'/>
        <polygon style={{ fill: '#3aae7d' }} points='771.34 1080 623.54 1080 0 0 147.8 0 771.34 1080'/>
      </svg>
      <div
        className='fixed top-0 left-0 w-full h-screen z-0 from-[#6a14d1] to-[#c82090] bg-gradient-to-br opacity-25'
        role='presentation'
      ></div>
      <h1 id='h1' className='text-white text-[6vmax] w-[49vmax] max-w-full m-8 font-extrabold leading-normal transition-all duration-1000 drop-shadow-2xl portrait:text-[4vmax] portrait:w-[33vmax] opacity-0 -translate-x-1/2'>
        Creating an inclusive world. Together.
      </h1>
      <div className='m-8 w-[25vmax] max-w-full text-center -translate-y-[2.75vmax]'>
        <p
          id='p'
          className='text-[2vmax] translate-x-[3.25vmax] translate-y-[8.25vmax] absolute leading-tight font-bold transition-all duration-1000 z-10 text-4xl w-[20vmax] max-w-full text-[#181818] opacity-0'
          style={{ filter: 'drop-shadow(0 0 13px rgba(255, 255, 255, 0.5))' }}
        >
          you have a much larger impact than you may realize.
        </p>
        <img
          id='bg'
          className='scale-y-[60%] translate-y-[2.75vmax] transition-all duration-1000'
          src={ Background }
          role='presentation'
          alt=''
        />
        <a
          id='a'
          className='text-2xl drop-shadow-xl transition-all duration-1000 opacity-0 after:block after:h-[2px] after:content-[""] after:-bottom-4 after:left-1/2 after:relative after:bg-[#fcb800] after:transition-all after:duration-200 after:w-0 hover:after:w-1/2 hover:after:left-1/4 focus-visible:after:w-1/2 focus-visible:after:left-1/4'
          href='#resources'
          onClick={ () => { setPage('Resources'); } }
          role='button'
          aria-label='Learn More'
        >
          <LinkSelector page='Learn More' pageReq='Learn More' />
        </a>
      </div>
    </main>
  );
}

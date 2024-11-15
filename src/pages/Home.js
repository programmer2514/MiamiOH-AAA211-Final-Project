import React, { useEffect } from 'react';

import DisabilityStripes from './../components/DisabilityStripes';
import GradientBackground from '../components/GradientBackground';
import LinkSelector from './../components/LinkSelector';

import Background from './../images/Background.png';

export default function Home({ page, setPage, className }) {

  useEffect(() => {

    document.getElementById('h1')?.classList.add('!opacity-0', '!-translate-x-1/2');
    document.getElementById('p')?.classList.add('!opacity-0');
    document.getElementById('bg')?.classList.add('!opacity-0', '!-translate-y-0');
    document.getElementById('a')?.classList.add('!opacity-0');
    document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/2');

    setTimeout(() => {
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-x-1/2');
      document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/2');
    }, 0);

    setTimeout(() => {
      document.getElementById('p')?.classList.remove('!opacity-0');
      document.getElementById('bg')?.classList.remove('!opacity-0', '!-translate-y-0');
      document.getElementById('a')?.classList.remove('!opacity-0');
    }, 250);

  }, [page]);

  return (
    <main
      id='content'
      className={className + ' bg-[#181818] flex flex-wrap items-center justify-center content-center portrait:items-start transition-all duration-1000'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom='#6a14d1'
        oldTo='#c82090'
        from='#6a14d1'
        to='#c82090'
      />

      <h1 id='h1' className='text-white text-[6vmax] w-[49vmax] max-w-full m-8 font-extrabold leading-normal transition-all duration-1000 drop-shadow-2xl portrait:text-[4vmax] portrait:w-[33vmax]'>
        Creating an inclusive world. Together.
      </h1>

      <div className='m-8 w-[25vmax] max-w-full text-center -translate-y-[2.75vmax]'>

        <p
          id='p'
          className='text-[2vmax] translate-x-[3.25vmax] translate-y-[8.25vmax] absolute leading-tight font-bold transition-all duration-1000 z-10 text-4xl w-[20vmax] max-w-full text-[#181818]'
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
          className='text-2xl drop-shadow-xl transition-all duration-1000 after:block after:h-[2px] after:content-[""] after:-bottom-4 after:left-1/2 after:relative after:bg-[#fcb800] after:transition-all after:duration-200 after:w-0 hover:after:w-1/2 hover:after:left-1/4 focus-visible:after:w-1/2 focus-visible:after:left-1/4'
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

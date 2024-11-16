import React, { useEffect } from 'react';

import DisabilityStripes from './../components/DisabilityStripes';
import GradientBackground from '../components/GradientBackground';

export default function MediaBundle({ page, setPage, className }) {

  useEffect(() => {

    document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/2');
    document.getElementById('bg-grad-old')?.classList.remove('!opacity-0');
    document.getElementById('bg-grad')?.classList.add('!opacity-0');
    document.getElementById('h1')?.classList.add('!opacity-0', '!-translate-y-1/2');

    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/2');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-y-1/2');
    }, 0);

  }, [page]);

  return (
    <main
      id='content'
      className={className + ' bg-[#181818] flex justify-center items-start content-start text-center transition-all duration-1000'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom='#a0a0a0'
        oldTo='#606060'
        from='#1466d1'
        to='#20c2c8'
      />

      <h1 id='h1' className='text-white text-[3vmax] max-w-full m-8 font-bold leading-normal transition-all duration-1000 drop-shadow-2xl max-lg:text-[4vmax]'>
        Media Bundle
      </h1>



    </main>
  );
}

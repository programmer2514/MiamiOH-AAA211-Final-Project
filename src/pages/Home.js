import React, { useEffect } from 'react';

export default function Home({ page }) {

  useEffect(() => {
    document.getElementById('home-text').classList.add('opacity-0', '-translate-x-1/2');
    setTimeout(() => {
      document.getElementById('home-text').classList.remove('opacity-0', '-translate-x-1/2');
    }, 10);
  }, [page]);

  return (
    <main id='content' className='from-[#6a14d1] to-[#c82090] bg-gradient-to-br mt-28 min-h-[calc(100vh-10.5rem)]'>
      <div className='w-full min-h-[calc(100vh-10.5rem)] bg-[rgba(0,0,0,0.25)] flex flex-wrap items-center'>
        <h1 id='home-text' className='text-white text-8xl font-extrabold max-w-[50%] ml-40 leading-normal transition-all duration-1000 opacity-0 -translate-x-1/2'>
          Creating an inclusive world. Together.
        </h1>
      </div>
    </main>
  );
}

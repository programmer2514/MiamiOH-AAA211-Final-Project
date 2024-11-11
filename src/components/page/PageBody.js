import React from 'react';

import FrameworkIconImg from './../../images/FrameworkIcon.png';
import ResearchIconImg from './../../images/ResearchIcon.png';
import ActionIconImg from './../../images/ActionIcon.png';

import PageHeader from './PageHeader';

export default function PageBody({ setPage, title, children }) {

  function getImage() {
    switch (title) {
      case 'Theoretical Framework':
        return FrameworkIconImg;

      case 'Research Process':
        return ResearchIconImg;

      case 'Action Plan':
        return ActionIconImg;

      default:
        return '';
    }
  }

  return (
    <main className='bg-white fixed w-[80rem] max-w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] top-[2rem] rounded-2xl z-50 left-1/2 -translate-x-1/2 overflow-hidden flex flex-col portrait:min-w-full portrait:min-h-full portrait:top-0 portrait:left-0 portrait:-translate-x-0 portrait:rounded-none'>
      <PageHeader
        image={getImage()}
        title={title}
        setPage={setPage}
      />
      <div id='page' className='p-8 text-xl flex-grow overflow-scroll'>
        {children}
      </div>
    </main>
  )
}
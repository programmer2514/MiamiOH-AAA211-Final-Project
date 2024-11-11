import React from 'react';

export default function Body({ children }) {
  return (
    <main id='main' className='bg-white max-w-7xl m-auto p-4 min-h-[calc(100vh-8.825rem)] text-xl'>
      {children}
    </main>
  )
}
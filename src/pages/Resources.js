import React from 'react';

export default function Resources({ page, setPage, className }) {
  return (
    <main
      id='content'
      className={className + ' bg-white'}
    >
      { page } Page!
    </main>
  );
}

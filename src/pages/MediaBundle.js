import React from 'react';

export default function MediaBundle({ page, setPage, className }) {
  return (
    <main
      id='content'
      className={className + ' bg-white'}
    >
      { page } Page!
    </main>
  );
}

import React from 'react';

export default function Image({ src, alt, caption, className }) {
  return (
    <div className={className}>
      <img
        className='rounded-xl'
        src={src}
        alt={alt}
      />
      <p className='italic text-center text-base'>
        {caption}
      </p>
    </div>
  )
}
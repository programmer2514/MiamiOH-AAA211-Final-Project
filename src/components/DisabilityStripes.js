import React from 'react';

export default function DisabilityStripes() {
  return (
    <svg
      id='stripes'
      className='fixed top-0 left-0 w-full h-screen brightness-[0.25] z-0 translate-x-[14vw] transition-all duration-1000'
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
  );
}

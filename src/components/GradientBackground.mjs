import React from 'react';

export default function GradientBackground({ oldFrom, oldTo, from, to }) {
  return (
    <>
      <div
        id="bg-grad-old"
        className={'fixed top-0 left-0 w-full h-screen z-0 from-[' + oldFrom + '] to-[' + oldTo + '] bg-gradient-to-br opacity-10'}
        role="presentation"
      >
      </div>
      <div
        id="bg-grad"
        className={'fixed top-0 left-0 w-full h-screen z-0 from-[' + from + '] to-[' + to + '] bg-gradient-to-br opacity-10 !opacity-0'}
        role="presentation"
      >
      </div>
    </>
  );
}

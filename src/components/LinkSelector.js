import React from 'react';

import Selector from './../images/Selector.png';

export default function LinkSelector({ page, pageReq }) {
  return (page === pageReq)
  ? (
    <>
      <img
        className='inline absolute h-12 -translate-y-[0.35rem] -translate-x-10'
        src={ Selector }
        role='presentation'
        alt=''
      />
      <span className='text-[#fcb800]'>{ pageReq }</span>
      <img
        className='inline absolute h-12 -translate-y-[0.3rem] -scale-x-100 translate-x-1'
        src={ Selector }
        role='presentation'
        alt=''
      />
    </>
    )
  : (
    <>
      { pageReq }
    </>
  );
}

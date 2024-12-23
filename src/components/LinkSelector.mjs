import React, { useContext } from 'react';

import { PageContext } from '..';
import { ImageSelector } from './../images';

export default function LinkSelector({ page, pageReq }) {
  if (!page) {
    page = useContext(PageContext);
  }

  return (page === pageReq || (pageReq === 'Resources' && page.includes('Article')))
    ? (
        <>
          <img
            className="inline absolute h-12 -translate-y-[0.35rem] -translate-x-10 [@media(max-height:600px)]:hidden"
            src={ImageSelector}
            role="presentation"
            alt=""
          />
          <span className="text-theme-orange">{ pageReq }</span>
          <img
            className="inline absolute h-12 -translate-y-[0.3rem] -scale-x-100 translate-x-1 [@media(max-height:600px)]:hidden"
            src={ImageSelector}
            role="presentation"
            alt=""
          />
        </>
      )
    : (
        <>
          { pageReq }
        </>
      );
}

import React from 'react';

import { ImageLogo } from './../images';

import { HamburgerMenu } from '.';

export default function Header({ page, setPage }) {
  return (
    <header id="header" className="fixed top-0 left-0 w-full z-40 p-4 bg-[#f2ae00] flex justify-around items-center drop-shadow-md">
      <a
        href="#"
        onClick={() => { setPage('Home'); }}
        aria-label="Home Link"
      >
        <img
          id="logo"
          className="h-20 translate-y-1"
          src={ImageLogo}
          alt='A simple header logo containing the text "diversity & disability"'
        />
      </a>
      <span className="w-96 max-md:w-0" role="presentation"></span>
      <HamburgerMenu page={page} setPage={setPage} />
    </header>
  );
}

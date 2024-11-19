import React, { useState } from 'react';

import { LinkSelector } from '.';

export default function HamburgerMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const tabIndex = (isChecked) ? '0' : '-1';

  return (
    <div className="w-8 h-7 m-4 flex flex-col justify-around">

      <input
        className="absolute w-8 h-8 z-50 appearance-none peer/hamburger"
        type="checkbox"
        name="hamburger"
        role="button"
        aria-label="Main Menu"
        checked={isChecked}
        onChange={() => { setIsChecked(!isChecked); }}
        aria-expanded={isChecked}
      />

      <div className="block h-1 w-full rounded-full bg-zinc-900 transition-transform duration-250 peer-checked/hamburger:rotate-45 peer-checked/hamburger:translate-y-[0.625rem]" role="presentation"></div>
      <div className="block h-1 w-full rounded-full bg-zinc-900 transition-transform duration-250 peer-checked/hamburger:scale-y-0" role="presentation"></div>
      <div className="block h-1 w-full rounded-full bg-zinc-900 transition-transform duration-250 peer-checked/hamburger:-rotate-45 peer-checked/hamburger:-translate-y-[0.5rem]" role="presentation"></div>

      <nav className="fixed right-0 top-28 z-50 h-body w-[28rem] max-w-full py-4 px-10 flex flex-col flex-wrap translate-x-full transition-transform duration-250 bg-zinc-900 text-zinc-100 text-2xl pointer-events-none peer-checked/hamburger:translate-x-0 peer-checked/hamburger:pointer-events-auto max-lg:landscape:h-body-no-footer" aria-hidden={!isChecked}>

        <a
          className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange"
          href="#"
          aria-label="Home"
          onClick={() => { setIsChecked(false); }}
          tabIndex={tabIndex}
        >
          <LinkSelector pageReq="Home" />
        </a>

        <a
          className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange"
          href="#about"
          aria-label="About"
          onClick={() => { setIsChecked(false); }}
          tabIndex={tabIndex}
        >
          <LinkSelector pageReq="About" />
        </a>

        <a
          className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange"
          href="#resources"
          aria-label="Resources"
          onClick={() => { setIsChecked(false); }}
          tabIndex={tabIndex}
        >
          <LinkSelector pageReq="Resources" />
        </a>

        <a
          className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange"
          href="#media-bundle"
          aria-label="Media Bundle"
          onClick={() => { setIsChecked(false); }}
          tabIndex={tabIndex}
        >
          <LinkSelector pageReq="Media Bundle" />
        </a>

        <a
          className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange"
          href="#faq"
          aria-label="FAQ"
          onClick={() => { setIsChecked(false); }}
          tabIndex={tabIndex}
        >
          <LinkSelector pageReq="FAQ" />
        </a>

        <div className="absolute bottom-4 left-0 w-full flex justify-around flex-row flex-wrap text-xl [@media(max-height:525px)]:hidden">

          <a
            className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange after:block after:h-2p after:content-blank after:bottom-0 after:left-1/2 after:relative after:bg-theme-orange after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0"
            href="//github.com/programmer2514/MiamiOH-AAA211-Final-Project/tree/main/src"
            target="_blank"
            rel="noreferrer"
            aria-label="View Source (Opens in a new window)"
            tabIndex={tabIndex}
          >
            View Source
          </a>

          <a
            className="block p-4 hover:text-theme-orange focus-visible:text-theme-orange after:block after:h-2p after:content-blank after:bottom-0 after:left-1/2 after:relative after:bg-theme-orange after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0"
            href="//programmer2514.github.io/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Source (Opens in a new window)"
            tabIndex={tabIndex}
          >
            My Projects
          </a>

        </div>

      </nav>

      <a
        className="fixed left-0 top-28 h-body w-full z-40 opacity-0 transition-opacity bg-zinc-900 pointer-events-none peer-checked/hamburger:opacity-50 peer-checked/hamburger:pointer-events-auto max-lg:landscape:h-body-no-footer"
        role="presentation"
        tabIndex="-1"
        onClick={() => { setIsChecked(false); }}
      >
      </a>

    </div>
  );
}

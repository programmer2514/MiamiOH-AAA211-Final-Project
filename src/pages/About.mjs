import React, { useContext, useEffect } from 'react';

import { PageContext } from '..';
import { DisabilityStripes, GradientBackground } from './../components';

import { ImageProfile, ImageProfileLandscape } from '../images';

export default function About({ className }) {
  const page = useContext(PageContext);

  function onLoadHandler(e) {
    e.target.classList.add('transition-all', 'duration-500');
    e.target.classList.remove('!opacity-0', '!-translate-x-1/4');
  }

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');
      document.getElementById('h1')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/4');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-y-1/4');

      let textElems = document.querySelectorAll('main p');

      for (let i = 0; i < textElems.length; i++) {
        let elem = textElems[i];

        setTimeout(() => {
          elem.classList.add('transition-all', 'duration-500');
          elem.classList.remove('!opacity-0', '!-translate-x-1/4');
        }, i * 25);
      }

      document.querySelectorAll('main div div [role="presentation"]')?.forEach((elem) => {
        elem.classList.add('transition-all', 'duration-500');
        elem.classList.remove('!opacity-0');
      });
    }, 10);
  }, [page]);

  return (
    <main
      id="content"
      className={className + ' flex justify-center items-start content-start'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom="#6a14d1"
        oldTo="#c82090"
        from="#d19f14"
        to="#c8bd20"
      />

      <div className="px-[10%] py-8 h-fit min-h-full flex flex-row items-center z-10">
        <img
          className="w-96 block rounded-xl max-lg:hidden !opacity-0 !-translate-x-1/4"
          src={ImageProfile}
          alt="A person with a dark blue polo shirt and asymmetrical purple hair stands in front of a blurry natural background"
          onLoad={onLoadHandler}
        />
        <div className="w-full ml-8 text-zinc-100 text-xl font-light [&_p]:mt-4 [&_p]:mx-2 max-lg:ml-0">
          <div
            className="block border-b-1 mb-2 w-24 border-solid border-zinc-400 max-lg:hidden !opacity-0"
            role="presentation"
          >
          </div>
          <h1 id="h1" className="text-zinc-100 text-[3vmax] mx-2 font-bold leading-normal drop-shadow-2xl max-lg:text-[4vmax] max-lg:text-center !opacity-0 !-translate-y-1/4">
            About This Project
          </h1>
          <img
            className="w-11/12 my-8 block rounded-xl mx-auto lg:hidden !opacity-0 !-translate-x-1/4"
            src={ImageProfileLandscape}
            alt="A person with a dark blue polo shirt and asymmetrical purple hair stands in front of a blurry natural background"
            onLoad={onLoadHandler}
          />
          <p className="!opacity-0 !-translate-x-1/4">
            Disability & Diversity is a project created by Benjamin Pryor for
            the Fall 2023 AAA 211 class at Miami University.
          </p>
          <p className="!opacity-0 !-translate-x-1/4">
            Its goal is to promote change-making on an individual level in order
            to create a better world for everyone by recognizing and celebrating
            the diversity of the human race.
          </p>
          <p className="!opacity-0 !-translate-x-1/4">
            Throughout this website and its linked resources, I invite you to
            share my vision of a world which is built on acceptance,
            accommodation, innovation, and inclusivity.
          </p>
          <p className="!opacity-0 !-translate-x-1/4">
            Together, we have the power to change the world.
            Let&rsquo;s make it count.
          </p>
          <div
            className="block border-b-1 mt-6 mb-8 w-24 border-solid border-zinc-400 max-lg:hidden !opacity-0"
            role="presentation"
          >
          </div>
          <p className="!opacity-0 !-translate-x-1/4">
            If you have questions, comments, or concerns, please don&rsquo;t
            hesitate to
            {' '}
            <a
              className="text-sky-400 underline"
              href="//programmer2514.github.io/contact.html"
              target="_blank"
              rel="noreferrer"
            >
              contact me
            </a>
            .
          </p>
        </div>
      </div>

    </main>
  );
}

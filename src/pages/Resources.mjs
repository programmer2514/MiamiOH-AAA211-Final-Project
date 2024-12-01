import React, { useContext, useEffect } from 'react';

import { PageContext } from '..';
import { DisabilityStripes, GradientBackground, Card } from './../components';

import {
  ImageAccidentalDiscrimination,
  ImageDisabilityInEverydayLife,
  ImageDisabilityInTheWorkplace,
  ImageEnactingSocialChange,
  ImageModelsOfDisability,
  ImageWhatIsADisability,
} from './../images/cards';

export default function Resources({ className }) {
  const page = useContext(PageContext);
  var loaded = 0;

  function onLoadHandler() {
    if (loaded === 5) {
      let cardElems = document.querySelectorAll('#card');

      for (let i = 0; i < cardElems.length; i++) {
        let elem = cardElems[i];

        setTimeout(() => {
          elem.classList.add('transition-all', 'duration-500');
          elem.classList.remove('!opacity-0');
        }, i * 50);

        setTimeout(() => {
          elem.classList.remove('transition-all', 'duration-500');
        }, (i * 50) + 500);
      }
    }
    else {
      loaded++;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');
      document.getElementById('h1')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/4');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-y-1/4');
    }, 10);
  }, [page]);

  return (
    <main
      id="content"
      className={className + ' flex flex-wrap justify-center items-start content-start'}
    >

      <DisabilityStripes className="!opacity-0 !translate-x-1/4" />
      <GradientBackground
        oldFrom="#d19f14"
        oldTo="#c8bd20"
        from="#a0a0a0"
        to="#606060"
      />

      <div className="w-full px-[10%] flex flex-wrap justify-center z-10 mb-8">

        <h1 id="h1" className="text-zinc-100 text-[3vmax] w-full m-8 font-bold leading-normal drop-shadow-2xl text-center max-lg:text-[4vmax] !opacity-0 !-translate-y-1/4">
          Resources
        </h1>

        <Card
          src={ImageWhatIsADisability}
          alt="A large question mark drawn on a chalkboard background with white chalk"
          title="What is a Disability?"
          subtitle="The answer may surprise you"
          href="#what-is-a-disability"
          onLoadHandler={onLoadHandler}
        />

        <Card
          src={ImageModelsOfDisability}
          alt="A simplified graphic of a group of people representing various disabilities is overlaid in the colors of the rainbow on a black background"
          title="Models of Disability"
          subtitle="How your view towards disability affects what you can do about it"
          href="#models-of-disability"
          onLoadHandler={onLoadHandler}
        />

        <Card
          src={ImageAccidentalDiscrimination}
          alt="A person in a wheelchair sits in front of a flight of stairs, staring at them"
          title="Accidental Discrimination"
          subtitle="How society excludes people with disabilities and what you can do about it"
          href="#accidental-discrimination"
          onLoadHandler={onLoadHandler}
        />

        <Card
          src={ImageEnactingSocialChange}
          alt="A man with a wheelchair and a breathing apparatus having a beer with three other people"
          title="Enacting Social Change"
          subtitle="How do I change society?"
          href="#enacting-social-change"
          onLoadHandler={onLoadHandler}
        />

        <Card
          src={ImageDisabilityInEverydayLife}
          alt="A man in a wheelchair, a man with a missing leg, and a woman have a drink and play corn hole together"
          title="Disability in Everyday Life"
          subtitle="Small ways that you can make a big difference"
          href="#disability-in-everyday-life"
          onLoadHandler={onLoadHandler}
        />

        <Card
          src={ImageDisabilityInTheWorkplace}
          alt="A woman in a wheelchair working on her laptop at an office desk"
          title="Disability in the Workplace"
          subtitle="Fostering an inclusive and productive work environment"
          href="#disability-in-the-workplace"
          onLoadHandler={onLoadHandler}
        />

      </div>

    </main>
  );
}

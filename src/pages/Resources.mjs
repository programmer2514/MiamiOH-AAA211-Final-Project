import React, { useContext, useEffect } from 'react';

import { PageContext } from '..';
import { DisabilityStripes, GradientBackground, Card } from './../components';

import {
  ImageAccidentalDiscrimination,
  ImageDisabilityInEverydayLife,
  ImageDisabilityInTheWorkplace,
  ImageEnactingSocialChange,
  ImageTheSocialModel,
  ImageWhatIsADisability,
} from './../images/cards';

export default function Resources({ className }) {
  const page = useContext(PageContext);

  useEffect(() => {
    document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/4');
    document.getElementById('bg-grad-old')?.classList.remove('!opacity-0');
    document.getElementById('bg-grad')?.classList.add('!opacity-0');
    document.getElementById('h1')?.classList.add('!opacity-0', '!-translate-y-1/4');

    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');
      document.getElementById('h1')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/4');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-y-1/4');
    }, 0);

    let cardElems = document.querySelectorAll('#card');

    for (let i = 0; i < cardElems.length; i++) {
      let elem = cardElems[i];

      elem.classList.add('!opacity-0');

      setTimeout(() => {
        elem.classList.add('transition-all', 'duration-500');
        elem.classList.remove('!opacity-0');
      }, i * 50);

      setTimeout(() => {
        elem.classList.remove('transition-all', 'duration-500');
      }, (i * 50) + 500);
    }
  }, [page]);

  return (
    <main
      id="content"
      className={className + ' bg-zinc-900 flex flex-wrap justify-center items-start content-start'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom="#d19f14"
        oldTo="#c8bd20"
        from="#a0a0a0"
        to="#606060"
      />

      <div className="w-full px-[10%] flex flex-wrap justify-center z-10 mb-8">

        <h1 id="h1" className="text-zinc-100 text-[3vmax] w-full m-8 font-bold leading-normal drop-shadow-2xl text-center max-lg:text-[4vmax]">
          Resources
        </h1>

        <Card
          src={ImageWhatIsADisability}
          alt=""
          title="What is a Disability?"
          subtitle="The answer may surprise you"
          href="#what-is-a-disability"
        />

        <Card
          src={ImageTheSocialModel}
          alt=""
          title="The Social Model"
          subtitle="A new way to view disability"
          href="#the-social-model"
        />

        <Card
          src={ImageAccidentalDiscrimination}
          alt=""
          title="Accidental Discrimination"
          subtitle="How society excludes disabled people and what you can do about it"
          href="#accidental-discrimination"
        />

        <Card
          src={ImageEnactingSocialChange}
          alt=""
          title="Enacting Social Change"
          subtitle="How do I change society?"
          href="#enacting-social-change"
        />

        <Card
          src={ImageDisabilityInEverydayLife}
          alt=""
          title="Disability in Everyday Life"
          subtitle="Small ways that you can make a big difference"
          href="#disability-in-everyday-life"
        />

        <Card
          src={ImageDisabilityInTheWorkplace}
          alt=""
          title="Disability in the Workplace"
          subtitle="Fostering an inclusive and productive work environment"
          href="#disability-in-the-workplace"
        />

      </div>

    </main>
  );
}

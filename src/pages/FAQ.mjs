import React, { useContext, useEffect } from 'react';

import { PageContext } from '..';
import { DisabilityStripes, Dropdown, GradientBackground } from './../components';
import {
  FAQAccessibilityInclusion,
  FAQAlwaysVisible,
  FAQBadThing,
  FAQCanBeCured,
  FAQHowToInclude,
  FAQLearnMore,
  FAQOfferHelp,
  FAQOkayToAsk,
  FAQRaiseAwareness,
  FAQWhatCounts,
} from '../faqs/index.mjs';

export default function FAQ({ className }) {
  const page = useContext(PageContext);

  useEffect(() => {
    document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/4');
    document.getElementById('bg-grad-old')?.classList.remove('!opacity-0');
    document.getElementById('bg-grad')?.classList.add('!opacity-0');
    document.getElementById('h1')?.classList.add('!opacity-0', '!-translate-y-1/4');
    document.getElementById('dropdown-list')?.classList.add('!opacity-0');

    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');
      document.getElementById('h1')?.classList.add('transition-all', 'duration-500');
      document.getElementById('dropdown-list')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/4');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
      document.getElementById('h1')?.classList.remove('!opacity-0', '!-translate-y-1/4');
      document.getElementById('dropdown-list')?.classList.remove('!opacity-0');
    }, 0);

    let dropdownElems = document.querySelectorAll('#dropdown');

    for (let i = 0; i < dropdownElems.length; i++) {
      let elem = dropdownElems[i];

      elem.classList.add('!opacity-0', '!-translate-y-1/4');

      setTimeout(() => {
        elem.classList.add('transition-all', 'duration-200');
        elem.classList.remove('!opacity-0', '!-translate-y-1/4');

        setTimeout(() => {
          elem.classList.remove('transition-all', 'duration-200');
        }, 200);
      }, i * 20);
    }

    document.querySelectorAll('article a').forEach((elem) => {
      elem.setAttribute('target', '_blank');
      elem.setAttribute('rel', 'noreferrer');
      elem.setAttribute('tabindex', '-1');
      elem.setAttribute('aria-label', elem.innerHTML + ' (Opens in a new window)');
    });
  }, [page]);

  return (
    <main
      id="content"
      className={className + ' flex flex-col justify-start items-center text-center'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom="#1466d1"
        oldTo="#20c2c8"
        from="#43b32d"
        to="#23e77c"
      />

      <h1 id="h1" className="text-zinc-100 text-[3vmax] max-w-full m-8 font-bold leading-normal drop-shadow-2xl max-lg:text-[4vmax] z-10">
        Frequently Asked Questions
      </h1>

      <div className="w-full px-[calc(10%+1rem)] flex flex-wrap justify-center z-10 mb-8">

        <div id="dropdown-list" className="border-1 border-solid border-zinc-700 drop-shadow-md rounded-xl overflow-hidden [&>:not(:last-child)]:border-b-1">
          <Dropdown
            title="What counts as a disability?"
            content={FAQWhatCounts}
            uid="0"
          />
          <Dropdown
            title="Can disabilities be cured?"
            content={FAQCanBeCured}
            uid="1"
          />
          <Dropdown
            title="Are disabilities always visible?"
            content={FAQAlwaysVisible}
            uid="2"
          />
          <Dropdown
            title="Is having a disability always a bad thing?"
            content={FAQBadThing}
            uid="3"
          />
          <Dropdown
            title="Is it okay to ask someone about their disability?"
            content={FAQOkayToAsk}
            uid="4"
          />
          <Dropdown
            title="What is the difference between accessibility and inclusion?"
            content={FAQAccessibilityInclusion}
            uid="5"
          />
          <Dropdown
            title="How can I include disabled people?"
            content={FAQHowToInclude}
            uid="6"
          />
          <Dropdown
            title="How do I offer a disabled person help without offending them?"
            content={FAQOfferHelp}
            uid="7"
          />
          <Dropdown
            title="How can I raise awareness for disability inclusion?"
            content={FAQRaiseAwareness}
            uid="8"
          />
          <Dropdown
            title="Where can I go to learn more about disability?"
            content={FAQLearnMore}
            uid="9"
          />
        </div>

      </div>

    </main>
  );
}

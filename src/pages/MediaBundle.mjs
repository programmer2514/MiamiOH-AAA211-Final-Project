import React, { useContext, useEffect } from 'react';

import { PageContext } from '..';
import { DisabilityStripes, GradientBackground, Card } from './../components';

import {
  ImageFacebookTwitter,
  ImageHandout,
  ImageInstagram,
  ImagePamphlet,
  ImagePoster,
  ImageSnapchatStory,
} from './../images/cards';

export default function MediaBundle({ className }) {
  const page = useContext(PageContext);

  useEffect(() => {
    document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/4');
    document.getElementById('bg-grad-old')?.classList.remove('!opacity-0');
    document.getElementById('bg-grad')?.classList.add('!opacity-0');
    document.getElementById('h1')?.classList.add('!opacity-0', '!-translate-y-1/4');

    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');
      document.getElementById('h1')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/4');
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
      className={className + ' bg-zinc-900 flex justify-center items-start content-start'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom="#a0a0a0"
        oldTo="#606060"
        from="#1466d1"
        to="#20c2c8"
      />

      <div className="w-full px-[10%] flex flex-wrap justify-center z-10 mb-8">

        <h1 id="h1" className="text-zinc-100 text-[3vmax] w-full m-8 font-bold leading-normal drop-shadow-2xl text-center max-lg:text-[4vmax]">
          Media Bundle
        </h1>

        <Card
          src={ImageInstagram}
          alt="A square image: The text 'disability ≠ inability' is overlaid on a stylized version of the disability pride flag. The diversity and disability logo is shown in small lettering in the bottom right"
          title="Instagram"
          href="Instagram.png"
          buttonText="Download"
          newPage="true"
          download="Instagram.png"
        />

        <Card
          src={ImageSnapchatStory}
          alt="A portrait-mode image: The text 'disability ≠ inability' is overlaid on a stylized version of the disability pride flag along with the text 'An inclusive world is just around the corner. and it's up to you and me'. The diversity and disability logo is shown in small lettering in the bottom right"
          title="Snapchat / Story"
          href="Snapchat.png"
          buttonText="Download"
          newPage="true"
          download="Snapchat.png"
        />

        <Card
          src={ImageFacebookTwitter}
          alt="A landscape-mode image: The text 'disability ≠ inability' is overlaid on a stylized version of the disability pride flag along with the text 'An inclusive world is just around the corner. and it's up to you and me'. The diversity and disability logo is shown in small lettering in the top right"
          title="Facebook / Twitter"
          href="Twitter-Facebook.png"
          buttonText="Download"
          newPage="true"
          download="Twitter-Facebook.png"
        />

        <Card
          src={ImagePoster}
          alt=""
          title="Poster"
          href="#"
          buttonText="Download"
          newPage="true"
          download="Poster.pdf"
        />

        <Card
          src={ImagePamphlet}
          alt=""
          title="Pamphlet"
          href="#"
          buttonText="Download"
          newPage="true"
          download="Pamphlet.pdf"
        />

        <Card
          src={ImageHandout}
          alt="The text 'Creating an inclusive world. Together.' is overlaid on a stylized version of the disability pride flag along with the diversity and disability logo. At the bottom of the image is the text 'Scan to learn more:' and a QR code linking to this website"
          title="Handout"
          href="Handout.pdf"
          buttonText="Download"
          download="Handout.pdf"
        />

      </div>

    </main>
  );
}

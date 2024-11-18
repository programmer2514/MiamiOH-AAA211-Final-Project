import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import readingTime from 'reading-time/lib/reading-time';

import { Article404, ArticleWhatIsADisability } from './../articles';

import { DisabilityStripes, GradientBackground } from './../components';

export default function Article({ page, setPage, className }) {
  useEffect(() => {
    document.getElementById('stripes')?.classList.remove('!opacity-0', '!translate-x-1/4');
    document.getElementById('bg-grad-old')?.classList.remove('!opacity-0');
    document.getElementById('bg-grad')?.classList.add('!opacity-0');

    setTimeout(() => {
      document.getElementById('stripes')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad-old')?.classList.add('transition-all', 'duration-500');
      document.getElementById('bg-grad')?.classList.add('transition-all', 'duration-500');

      document.getElementById('stripes')?.classList.add('!opacity-0', '!translate-x-1/4');
      document.getElementById('bg-grad-old')?.classList.add('!opacity-0');
      document.getElementById('bg-grad')?.classList.remove('!opacity-0');
    }, 0);

    let articleElems = document.querySelectorAll('article > *, aside > *');

    for (let i = 0; i < articleElems.length; i++) {
      let elem = articleElems[i];

      elem.classList.add('!opacity-0', '!-translate-x-1/4');

      setTimeout(() => {
        elem.classList.add('transition-all', 'duration-500');
        elem.classList.remove('!opacity-0', '!-translate-x-1/4');
      }, i * 25);
    }

    document.querySelectorAll('article a, aside a').forEach((elem) => {
      elem.setAttribute('target', '_blank');
      elem.setAttribute('rel', 'noreferrer');
      elem.setAttribute('aria-label', elem.innerHTML + ' (Opens in a new window)');
    });
  }, [page]);

  // Get article to display
  var articleText = Article404;
  const article = location.href.match(/[?#](.*)/);
  if (article) {
    switch (article[1]) {
      case 'what-is-a-disability':
        articleText = ArticleWhatIsADisability;
        break;
    }
  }

  return (
    <main
      id="content"
      className={className + ' bg-[#181818] flex flex-col justify-start items-center content-center'}
    >

      <DisabilityStripes />
      <GradientBackground
        oldFrom="#a0a0a0"
        oldTo="#606060"
        from="#6a14d1"
        to="#c82090"
      />

      <div className="py-2 flex flex-col w-[70vw] text-white relative z-10 *:drop-shadow-2xl">

        <nav className="border-b-[1px] border-gray-400 border-solid flex justify-between">
          <a
            className="block py-4 max-w-fit text-xl hover:text-[#fcb800] focus-visible:text-[#fcb800] after:block after:h-[2px] after:content-[''] after:bottom-0 after:left-1/2 after:relative after:bg-[#fcb800] after:transition-all after:duration-200 after:w-0 hover:after:w-full hover:after:left-0 focus-visible:after:w-full focus-visible:after:left-0"
            href="#resources"
            onClick={() => { setPage('Resources'); }}
            role="button"
            aria-label="Back to All Resources"
          >
            &larr; All Resources
          </a>
          <span className="block py-4 max-w-fit font-light text-xl text-gray-400">
            { readingTime(articleText).text }
          </span>
        </nav>

        <article
          className={
            /*     Base     */ 'leading-relaxed' + ' '
    /*      h1      */ + '[&_h1]:mt-8 [&_h1]:text-4xl [&_h1]:font-bold' + ' '
    /*      h2      */ + '[&_h2]:text-gray-400 [&_h2]:uppercase [&_h2]:mt-2 [&_h2]:text-xl [&_h2]:font-extralight [&_h2]:mb-6' + ' '
    /*      p       */ + '[&_p]:mt-4 [&_p]:font-light [&_p]:text-xl' + ' '
    /*  blockquote  */ + '[&_blockquote]:px-4 [&_blockquote]:mt-4 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-400 [&_blockquote]:border-solid [&_blockquote]:text-gray-400' + ' '
    /*     cite     */ + '[&_cite]:not-italic [&_cite]:text-sm [&_cite]:align-super [&_cite]:text-gray-400' + ' '
    /*      a       */ + '[&_a]:text-sky-400 [&_a]:underline'
          }
        >
          <Markdown rehypePlugins={[rehypeRaw]}>
            { articleText.split('---')[0] }
          </Markdown>
        </article>

        <aside
          className={
            /*     Base     */ 'leading-relaxed text-gray-200 py-4 border-t-[1px] border-gray-400 border-solid mt-8' + ' '
    /*      h3      */ + '[&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-bold' + ' '
    /*      p       */ + '[&_p]:ml-4 [&_p]:font-light [&_p]:text-lg' + ' '
    /*      a       */ + '[&_a]:text-sky-400 [&_a]:underline'
          }
        >
          <Markdown rehypePlugins={[rehypeRaw]}>
            { articleText.split('---')[1] }
          </Markdown>
        </aside>

        <Helmet>
          <title>
            Diversity & Disability |
            { ' ' + articleText.match(/# (.*)/)[1] }
          </title>
        </Helmet>

      </div>
    </main>
  );
}

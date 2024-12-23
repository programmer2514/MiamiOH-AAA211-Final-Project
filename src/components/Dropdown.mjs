import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function onClickHandler(e) {
  var link = (e.target.nodeName !== 'A') ? e.target.parentElement : e.target;

  if (link.getAttribute('aria-expanded') === 'false') {
    document.querySelectorAll('#dropdown').forEach((elem) => {
      if (elem !== link.parentElement) {
        collapse(elem);
      }
    });
    expand(link.parentElement);
  }
  else {
    collapse(link.parentElement);
  }
}

function collapse(dropdown) {
  dropdown.firstElementChild.setAttribute('aria-expanded', 'false');
  dropdown.lastElementChild.setAttribute('aria-hidden', 'true');

  dropdown.firstElementChild.lastElementChild.classList.add('rotate-180');
  dropdown.lastElementChild.style.removeProperty('height');

  dropdown.lastElementChild.querySelectorAll('a').forEach((elem) => {
    elem.setAttribute('tabindex', '-1');
  });
}

function expand(dropdown) {
  dropdown.firstElementChild.setAttribute('aria-expanded', 'true');
  dropdown.lastElementChild.setAttribute('aria-hidden', 'false');

  dropdown.firstElementChild.lastElementChild.classList.remove('rotate-180');
  dropdown.lastElementChild.style.height = dropdown.lastElementChild.firstElementChild.getBoundingClientRect().height - 32 + 'px';

  dropdown.lastElementChild.querySelectorAll('a').forEach((elem) => {
    elem.setAttribute('tabindex', '0');
  });
}

export default function Dropdown({ title, content, uid }) {
  return (
    <section
      id="dropdown"
      className="text-left text-zinc-100 bg-zinc-800 border-zinc-700 border-solid !opacity-0 !-translate-y-1/4"
    >
      <a
        id={'dropdown-' + uid}
        className="text-2xl font-semibold px-6 py-4 w-full flex items-center justify-between"
        href="#faq"
        onClick={onClickHandler}
        aria-expanded="false"
        aria-controls={'dropdown-content-' + uid}
        role="button"
      >
        <h2 className="inline-block">{ title }</h2>
        <span className="inline-block min-w-12 translate-x-[0.725rem] before:content-blank before:w-4 before:h-1 before:bg-zinc-100 before:inline-block before:-rotate-45 before:translate-x-[0.725rem] before:-translate-y-2 after:content-blank after:w-4 after:h-1 after:bg-zinc-100 after:inline-block after:rotate-45 after:translate-x-[0.275rem] after:-translate-y-2 rotate-180 transition-transform duration-200"></span>
      </a>
      <article
        id={'dropdown-content-' + uid}
        className="overflow-hidden h-0 transition-all duration-200"
        aria-hidden="true"
        aria-labelledby={'dropdown-' + uid}
        role="region"
      >
        <div
          className={
            'leading-relaxed p-6 -translate-y-8' + ' '
            + '[&_p]:mt-6 [&_p]:font-light [&_p]:text-xl' + ' '
            + '[&_ul]:mt-2 [&_ul]:ml-12 [&_ul]:font-light [&_ul]:text-xl [&_ul]:list-disc' + ' '
            + '[&_a]:text-sky-400 [&_a]:underline'
          }
        >
          <Markdown rehypePlugins={[rehypeRaw]}>
            { content }
          </Markdown>
        </div>
      </article>
    </section>
  );
}

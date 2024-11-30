import React from 'react';

export default function Card({ src, alt, title, subtitle, href, onLoadHandler, buttonText = 'Read Article', download = false }) {
  return (
    <a
      id="card"
      className="w-96 max-w-full flex flex-col justify-start items-stretch content-start bg-zinc-800 border-1 border-zinc-700 border-solid m-4 p-4 rounded-xl drop-shadow-md hover:translate-y-[0.125rem] hover:drop-shadow-sm !opacity-0"
      href={href}
      role="button"
      aria-label={(download ? 'Download - ' : 'Read Article - ') + title}
      download={download}
    >
      <img
        className="rounded-xl w-full"
        src={src}
        alt={alt}
        onLoad={onLoadHandler}
      />
      <h2 className="mt-4 mx-1 text-2xl font-bold text-zinc-100">{title}</h2>
      <h3 className="text-zinc-400 mx-1 uppercase text-base font-extralight border-b-1 border-zinc-700 pb-4 mb-5 flex-grow">{subtitle}</h3>
      <p className="text-lg font-light text-zinc-100 px-4 py-2 w-fit rounded-xl drop-shadow-sm from-[#6a14d1] to-[#c82090] bg-gradient-to-br my-1">{buttonText}</p>
    </a>
  );
}

import React from 'react';

export default function HiddenButton({ text, href, className }) {
  return (
    <a
      className={'fixed left-0 z-50 text-[#181818] bg-white px-4 py-2 border-solid border-2 border-black -translate-x-full transition-all focus-visible:-translate-x-0 ' + className}
      href={href}
      role="button"
    >
      {text}
    </a>
  );
}

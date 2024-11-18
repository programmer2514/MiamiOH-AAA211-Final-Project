import React from 'react';

export default function Header() {
  return (
    <footer
      style={{ boxShadow: '0 4px 3px rgba(0, 0, 0, 0.07) inset' }}
      className="fixed left-0 bottom-0 w-full p-4 flex justify-center items-center z-50 bg-[#d98416] max-lg:landscape:hidden"
    >
      <small className="text-[#181818] font-light text-base">
        Copyright &copy;
        { new Date().getFullYear() }
        {' '}
        Benjamin Pryor
      </small>
    </footer>
  );
}

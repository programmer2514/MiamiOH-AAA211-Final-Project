import React from 'react';

import { Page, SlideDots } from '.';

export default function Body({ page, setPage }) {
  return (
    <>
      <Page className="mt-28 mb-14 h-[calc(100vh-10.5rem)] min-w-full max-w-full overflow-x-hidden max-lg:landscape:h-[calc(100vh-7rem)] max-lg:landscape:mb-0" page={page} setPage={setPage} />
      <SlideDots page={page} setPage={setPage} />
    </>
  );
}

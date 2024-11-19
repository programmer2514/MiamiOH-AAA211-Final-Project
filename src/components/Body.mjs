import React from 'react';

import { Page, SlideDots } from '.';

export default function Body() {
  return (
    <>
      <Page className="mt-28 mb-14 h-body min-w-full max-w-full overflow-x-hidden max-lg:landscape:h-body-no-footer max-lg:landscape:mb-0" />
      <SlideDots />
    </>
  );
}

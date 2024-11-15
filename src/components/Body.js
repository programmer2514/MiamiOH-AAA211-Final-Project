import React from 'react';

import Page from './Page';
import SlideDots from './SlideDots';

export default function Body({ page, setPage }) {
  return (
    <>
      <Page page={ page } />
      <SlideDots page={ page } setPage={ setPage } />
    </>
  );
}

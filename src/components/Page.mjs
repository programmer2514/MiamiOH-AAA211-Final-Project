import React from 'react';

import {
  PageHome,
  PageFAQ,
  PageMediaBundle,
  PageResources,
  PageAbout,
  PageArticle,
} from './../pages';

export default function Page({ page, setPage, className }) {
  switch (page) {
    case 'Home':
      return <PageHome className={className} page={page} setPage={setPage} />;
    case 'About':
      return <PageAbout className={className} page={page} setPage={setPage} />;
    case 'Resources':
      return <PageResources className={className} page={page} setPage={setPage} />;
    case 'Media Bundle':
      return <PageMediaBundle className={className} page={page} setPage={setPage} />;
    case 'FAQ':
      return <PageFAQ className={className} page={page} setPage={setPage} />;
    default:
      return <PageArticle className={className} page={page} setPage={setPage} />;
  }
}

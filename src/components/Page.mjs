import React, { useContext } from 'react';

import { PageContext } from '..';
import {
  PageHome,
  PageFAQ,
  PageMediaBundle,
  PageResources,
  PageAbout,
  PageArticle,
} from './../pages';

export default function Page({ className }) {
  const page = useContext(PageContext);

  switch (page) {
    case 'Home':
      return <PageHome className={className} />;
    case 'About':
      return <PageAbout className={className} />;
    case 'Resources':
      return <PageResources className={className} />;
    case 'Media Bundle':
      return <PageMediaBundle className={className} />;
    case 'FAQ':
      return <PageFAQ className={className} />;
    default:
      return <PageArticle className={className} />;
  }
}

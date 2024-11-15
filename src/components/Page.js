import React from 'react';

import Home from './../pages/Home';
import FAQ from './../pages/FAQ';
import MediaBundle from './../pages/MediaBundle';
import Resources from './../pages/Resources';
import About from './../pages/About';

export default function Page({ page }) {
  switch (page) {
    case 'Home':
      return <Home page={ page } />;
    case 'About':
      return <About />;
    case 'Resources':
      return <Resources />;
    case 'Media Bundle':
      return <MediaBundle />;
    case 'FAQ':
      return <FAQ />;
  }
}

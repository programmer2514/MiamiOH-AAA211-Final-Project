import React from 'react';

import Home from './../pages/Home';
import FAQ from './../pages/FAQ';
import MediaBundle from './../pages/MediaBundle';
import Resources from './../pages/Resources';
import About from './../pages/About';

export default function Page({ page, setPage, className }) {
  switch (page) {
    case 'Home':
      return <Home className={ className } page={ page } setPage={ setPage } />;
    case 'About':
      return <About className={ className } page={ page } setPage={ setPage } />;
    case 'Resources':
      return <Resources className={ className } page={ page } setPage={ setPage } />;
    case 'Media Bundle':
      return <MediaBundle className={ className } page={ page } setPage={ setPage } />;
    case 'FAQ':
      return <FAQ className={ className } page={ page } setPage={ setPage } />;
  }
}

import React from 'react';
import { Helmet } from 'react-helmet';

import Favicon from './../images/favicon/favicon.ico';
import Favicon16 from './../images/favicon/favicon-16x16.png';
import Favicon32 from './../images/favicon/favicon-32x32.png';

import SocialCard from './../images/SocialCard.png';

export default function Head({ title }) {
  return (
    <Helmet>

      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      <title>Diversity & Disability | { title }</title>

      <link
        rel="icon"
        type="image/x-icon"
        href={ Favicon }
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={ Favicon16 }
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={ Favicon32 }
      />

      <meta
        property="og:title"
        content="Diversity & Disability"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:description"
        content="Creating an inclusive world. Together."
      />
      <meta
        property="og:image"
        content={ SocialCard }
      />
      <meta
        property="og:url"
        content="https://programmer2514.github.io/#disability"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

    </Helmet>
  );
}

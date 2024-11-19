import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { PageContext } from '..';

export default function Head() {
  const page = useContext(PageContext);

  return (
    <Helmet>
      <title>
        Diversity & Disability |
        { ' ' + page }
      </title>
    </Helmet>
  );
}

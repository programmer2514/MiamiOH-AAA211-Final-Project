import React from 'react';
import { Helmet } from 'react-helmet';

export default function Head({ title }) {
  return (
    <Helmet>
      <title>Diversity & Disability | { title }</title>
    </Helmet>
  );
}

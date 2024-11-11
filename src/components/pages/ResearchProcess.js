import React from 'react';

import ResearchVisualImg from './../../images/ResearchVisual.jpg'

import Image from './../Image';

export default function ResearchProcess({ page }) {

  if (page != 'Research Process') return (<></>);

  return (
    <>
      <p className='mb-4'>
        Due to the topic at hand, my research process quickly deviated from my
        typical pattern. Normally, I seek out primarily peer-reviewed, academic
        sources as well as professional sources such as encyclopedias and
        respected news websites.
      </p>
      <p className='mb-4'>
        Throughout my research on this topic, though, it became apparent that
        lived experiences and the voices of individuals would be even more
        crucial to answering my question than academic and professional works.
      </p>
      <Image
        className='w-1/2 float-right ml-4 portrait:w-full portrait:float-none portrait:ml-0'
        src={ResearchVisualImg}
        alt='A picture of a brain sits at the center of a graph with connections branching out to the sides. On the left side is an internet symbol surrounded by the icons of the following sources: Forbes, X (Twitter), Reddit, YouTube, and TED. On the right side is a research symbol with a web of document icons branching out from it.'
      />
      <p className='mb-4'>
        I thus chose to search in a wide variety of places, including news
        sites, ted talks, blogs, academia, and even forum posts. I was searching
        for common elements between all these sources and was surprised by how
        quickly I found them.
      </p>
      <p className='mb-4'>
        Through academic and public sources alike I found a common theme that
        aligned almost perfectly with the Social (or Affirmative) Model of
        disability. Even people who seemingly had no knowledge of this model
        were arguing in favor of it. 
      </p>
      <p className='mb-4'>
        Once I discovered this connection, I began to branch out in both public
        and academic circles, finding commonalities and ideas as to what my next
        steps should be. I ended up with many dozens of possible sources, only
        a handful of which are curated and annotated here. I will definitely be
        adding onto these as my project progresses and I discover more ways to
        effectively tie sources in.
      </p>
    </>
  )
}
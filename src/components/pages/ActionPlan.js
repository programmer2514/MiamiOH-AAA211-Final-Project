import React from 'react';

import ClimateParagraphImg from './../../images/ClimateParagraph.jpg';
import ClimatePosterImg from './../../images/ClimatePoster.jpg';

import Image from '../Image';

export default function ActionPlan({ page }) {
  
  if (page != 'Action Plan') return (<></>);
  
  return (
    <>
      <p className='mb-4'>
        Moving forwards, I want to be able to provide the public with a set of
        helpful resources in understanding the challenges that disabled people
        face in modern society, and some succinct and achievable ways in which
        they can lighten that burden and make the world a more accessible place.
      </p>
      <p className='mb-4'>
        My first idea in this regard was to create a webpage, because they are
        nearly universally understood and (if done correctly) accessible to a
        huge number of people. I quickly realized though that most people,
        especially those unaffected by societal discrimination against disabled
        people, are not interested in reading through a web text, essay, or blog
        on the topic.
      </p>
      <p className='mb-4'>
        Consider the following two example images:
      </p>
      <div className='flex items-center justify-center portrait:flex-col'>
        <Image
          className='mr-4 inline-block w-2/5 portrait:w-full portrait:mr-0 portrait:mb-4'
          src={ClimateParagraphImg}
          alt='A paragraph of text stating the following: In light of the growing climate crisis, immediate and transformative action is essential to mitigate the long-term impacts of climate change and preserve a habitable planet for future generations. As global temperatures rise, extreme weather events, from wildfires to hurricanes, are occurring with greater frequency and severity, disrupting ecosystems and displacing communities worldwide. The Intergovernmental Panel on Climate Change (IPCC) has made clear that limiting global warming to 1.5°C above pre-industrial levels requires unprecedented reductions in greenhouse gas emissions. Yet, many governments and industries continue to delay meaningful action, focusing on short-term profits and political interests over long-term sustainability. Individuals must demand systemic change, pressuring policymakers to implement policies that support renewable energy, protect biodiversity, and reduce carbon emissions on a massive scale. Furthermore, personal choices, such as reducing energy consumption, supporting sustainable businesses, and educating others about climate change, are vital to creating a groundswell of public commitment to environmental action. Now is the time to stand together, holding leaders accountable and actively participating in the transition toward a more sustainable and resilient world.'
        />
        <Image
          className='ml-4 inline-block w-2/5 portrait:w-full portrait:ml-0'
          src={ClimatePosterImg}
          alt='A large graphic of earth takes up the right half of a poster. The left half contains the following text: SAVE THE EARTH NOW! CLIMATE CRISIS IS HERE. Extreme weather, rising seas, and damaged ecosystems affect us all. WE MUST ACT FAST! To keep global warming below 1.5°C, we need to cut greenhouse gas emissions drastically. WHAT YOU CAN DO: Demand climate action from our leaders. Support renewable energy & sustainable businesses. Reduce energy use & spread awareness. Join the fight for a sustainable future. The time is NOW!'
        />
      </div>
      <p className='italic text-center text-base'>
        [Source: ChatGPT]
      </p>
      <p className='mb-4'>
        Which one grabs your attention and makes a bigger impact on you? Most
        likely, the one that is condensed, visual, and isn&rsquo;t packed with
        text you have to pore over.
      </p>
      <p className='mb-4'>
        If I want to make an impact, I need to lean into at-a-glance
        information, not long-form academic writing. Since the most important
        audience to reach with this material is those who are able-bodied and
        may not have even given thought to how their actions could be
        discriminatory, I am leaning towards producing a variety of more
        condensed communication forms such as pamphlets, flyers, or even
        advertisements.
      </p>
      <p className='mb-4'>
        I want to compile all of these into a media bundle and then create a
        website that they link to which elaborates further on the topic. I feel
        this provides the best of both worlds: in-depth information for people
        who are interested, and at-a-glance information that can plant the idea
        in the casual onlooker of &ldquo;hmm, maybe I should do something about
        that.&rdquo;
      </p>
    </>
  )
}
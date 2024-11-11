import React from 'react';

import MedicalModelImg from './../../images/MedicalModel.jpg';
import SocialModelImg from './../../images/SocialModel.jpg';

import Image from './../Image';

export default function TheoreticalFramework({ page }) {

  if (page != 'Theoretical Framework') return (<></>);

  return (
    <>
      <p className='mb-6'>
      The fundamental framework of my research is the idea that we as a society
      should be inclusive towards those with disabilities. My goal is to promote
      ways in which the theory of inclusivity collides with practice; in other
      words, what would a truly inclusive society look like?
      </p>
      <h3 className='text-2xl font-bold mb-2'>
        The Medical Model
      </h3>
      <p className='mb-4'>
        Throughout my research, I found again and again this overarching fear
        and uncertainty around disability. Everyone is afraid of what becoming
        disabled would do to them, whether that is losing their job, being
        unable to get around, or a whole host of other things.
      </p>
      <Image
        className='w-1/2 float-right ml-4 portrait:w-full portrait:float-none portrait:ml-0'
        src={MedicalModelImg}
        alt='A graph with a circle in the middle labeled "Medical Model: Person is the problem." Around the circle are several small block of text which read as follows: Is housebound. Needs help and caregivers. Is sick, looking for a cure. Cant walk. Cant get up steps and walk. Confined to a wheelchair.'
        caption='[Source: TEDx Talks, 2020]'
      />
      <p className='mb-4'>
        These fears stem from what is known as the Medical Model: The idea that
        a disabled person is disabled because there is something wrong with them
        that keeps them from being &ldquo;normal.&rdquo; This idea, while widely prevalent,
        is fundamentally discriminatory.
      </p>
      <p className='mb-4'>
        It may be confusing at first; why would it be discriminatory to point out
        the truth that disabled people have something physically or mentally
        limiting about their bodies? That idea alone is not discriminatory, but
        it becomes so when it leads to a shift in blame fully onto the disabled
        person. 
      </p>
      <p className='mb-4'>
        The truth is, even the most able-bodied/minded person has physical and
        mental limitations, and humans have been collectively advancing our
        abilities far beyond those of our bodies for thousands of years. Why
        then do we so readily resign ourselves to the notion that disabled
        people cannot be a functional part of society? That seems unfair,
        doesn&rsquo;t it?
      </p>
      <p className='mb-6'>
        When brought under a critical eye, it becomes apparent that something
        more than bodily ability is at play in the process of making someone
        disabled; there is a societal component as well.
      </p>
      <h3 className='text-2xl font-bold mb-4'>
        The Social Model
      </h3>
      <p className='mb-4'>
        As I branched out into different sources on this topic, I came upon one
        common thread: the Social Model. This model brings into question the
        ideas stated by the Medical Model and instead offers up the idea that
        the way society is built is responsible for disabling people, not their
        impairments.
      </p>
      <Image
        className='w-1/2 float-left mr-4 portrait:w-full portrait:float-none portrait:mr-0'
        src={SocialModelImg}
        alt='A graph with a circle in the middle labeled "Social Model: Environment is the problem." Around the circle are several small block of text which read as follows: Discrimination and Segregation. Segregated schooling. Only stairs, with no ramp or lift. Inaccessible buildings. Inaccessible public transport. Multiple barriers to employment.'
        caption='[Source: TEDx Talks, 2020]'
      />
      <p className='mb-4'>
        This model provides an interesting standpoint, because instead of
        placing all the blame on the individual, it shifts it onto society. It
        takes the dialogue from &ldquo;we&rsquo;re sorry for you&rdquo; to
        &ldquo;what can we change to accommodate you?&rdquo;
      </p>
      <p className='mb-4'>
        For example, everyone would consider someone who can&rsquo;t walk
        disabled. The Medical Model firmly backs this, saying that they have a
        problem that needs to be fixed. The Social Model, on the other hand,
        asks why they should be prevented from accessing certain buildings
        because of their impairment.
      </p>
      <p className='mb-4'>
        The Medical Model calls their method of transportation (a wheelchair)
        broken, where the Social Model just calls it different. 
      </p>
      <p className='mb-4'>
        Imagine we had a society that was fully wheelchair accessible. Imagine
        we built technologies meant to accommodate and extend the capabilities
        of those in wheelchairs. Would they even be disabled anymore? They would
        still have a physical limitation, but what does it matter if they can
        do everything just as well as everyone else?
      </p>
      <p className='mb-4'>
        This shift in perspective has become the foundation of my research.
        Where the Medical Model sees barriers, the Social Model sees
        opportunities for growth and inclusivity. If I am going to compile
        practical ways in which to include disabled people, the Social Model
        must be the framework through which I do so.
      </p>
      <p className='mb-4'>
        And let&rsquo;s be real: does anybody actually want disabled people to remain
        disabled? Maybe instead of struggling against their bodies, we should
        change how our society prevents those bodies from participating in daily
        life. We can make a change, and the Social Model shows us how.
      </p>
    </>
  )
}
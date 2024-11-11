import React, { useState } from 'react';
import client from 'react-dom/client';

import './build.css';

import HeaderIconImg from './images/HeaderIcon.png';
import FrameworkImg from './images/Framework.jpg';
import ResearchImg from './images/Research.jpg';
import ActionImg from './images/Action.jpg';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NavLink from './components/NavLink';
import Card from './components/Card';

import PageContainer from './components/page/PageContainer';
import TheoreticalFramework from './components/pages/TheoreticalFramework';
import ResearchProcess from './components/pages/ResearchProcess';
import ActionPlan from './components/pages/ActionPlan';

function App() {

  const [page, setPage] = useState('');

  const disableOnPageSwitch = (page == '') ? "0" : "-1";

  return (
    <>
      <Header
        image={HeaderIconImg}
        title='Multimodal Narrative: Disability Inclusion'
        tabIndex={disableOnPageSwitch}
        links={[
          <NavLink
            key='0'
            text='Annotated Bibliography'
            tabIndex={disableOnPageSwitch}
            href='//docs.google.com/document/d/1MC2VobxaLlIYjQ3QYqFYaiFJLNwp-sns-JuJ7D27sdA/edit?usp=sharing'
          />
        ]}
      />

      <Body>
        <br />
        <h2 className='text-5xl mx-56 mb-12 text-center leading-tight portrait:mx-8'>
          &ldquo;How can we help create a society that allows disabled people
          not only to <b>participate</b> but to <b>flourish</b>?&rdquo;
        </h2>
        <p className='mx-4 mb-6'>
          As I was diving into sources on the topic of disability, this is the
          question I began to ask myself. What is modern society getting right?
          What are we getting wrong? How should we improve? What does that look
          like practically?
        </p>
        <p className='mx-4 mb-6'>
          Over the past few weeks, I have been building a research archive of
          several sources that provide some amazing insight into these questions.
        </p>
        <p className='mx-4 mb-6'>
          You can find more information below:
        </p>
        <div id='cards' className='text-center'>
          <Card
            title='Theoretical Framework'
            image={FrameworkImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Theoretical Framework') }}
          />
          <Card
            title='Research Process'
            image={ResearchImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Research Process') }}
          />
          <Card
            title='Action Plan'
            image={ActionImg}
            tabIndex={disableOnPageSwitch}
            onClick={() => { setPage('Action Plan') }}
          />
        </div>
      </Body>

      <PageContainer page={page} setPage={setPage}>
        <TheoreticalFramework page={page} />
        <ResearchProcess page={page} />
        <ActionPlan page={page} />
      </PageContainer>
      
      <Footer
        year={new Date().getFullYear()}
        holder='Benjamin Pryor'
        tabIndex={disableOnPageSwitch}
        links={[
          <NavLink
            key='0'
            text='View Source'
            tabIndex={disableOnPageSwitch}
            href='https://github.com/programmer2514/AAA211-Multimodal-Narrative/tree/main/src'
          />,
          <NavLink
            key='1'
            text='My Projects'
            tabIndex={disableOnPageSwitch}
            href='//programmer2514.github.io/'
          />
        ]}
      >
        <p>Made with</p>
        <NavLink
          className='!mx-1 underline after:hidden portrait:!mt-0'
          text='ReactJS'
          tabIndex={disableOnPageSwitch}
          href='//react.dev/'
        />
        <p>and</p>
        <NavLink
          className='!ml-1 underline after:hidden portrait:!mt-0'
          text='TailwindCSS'
          tabIndex={disableOnPageSwitch}
          href='//tailwindcss.com/'
        />
      </Footer>
    </>
  )
}

client
  .createRoot( document.getElementById('root') )
  .render( <App /> );
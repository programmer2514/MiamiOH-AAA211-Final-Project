import React, { useCallback, useState } from 'react';
import client from 'react-dom/client';

import './build.css';

import Head from './components/Head';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import HiddenButton from './components/HiddenButton';

document.lastScroll = 0;

function App() {

  // Get page from URL
  var urlPage;
  switch (window.location.href.match(/[?#](.*)/)[1]) {
    case 'about':
      urlPage = 'About';
      break;
    case 'resources':
      urlPage = 'Resources';
      break;
    case 'media-bundle':
      urlPage = 'Media Bundle';
      break;
    case 'faq':
      urlPage = 'FAQ';
      break;
    default:
      urlPage = 'Home';
      break;
  }
  const [page, setPage] = useState(urlPage);

  // Get next page
  function getNext() {
    switch (page) {
      case 'Home':
        return ['About', '#about'];
      case 'About':
        return ['Resources', '#resources'];
      case 'Resources':
        return ['Media Bundle', '#media-bundle'];
      case 'Media Bundle':
        return ['FAQ', '#faq'];
      case 'FAQ':
        return null;
    }
  }

  // Get previous page
  function getPrev() {
    switch (page) {
      case 'Home':
        return null;
      case 'About':
        return ['Home', '#'];
      case 'Resources':
        return ['About', '#about'];
      case 'Media Bundle':
        return ['Resources', '#resources'];
      case 'FAQ':
        return ['Media Bundle', '#media-bundle'];
    }
  }

  // Ensure window location isn't being updated by multiple events at once
  var hasChanged = false;

  // Handle keypresses
  const handleKeyup = useCallback((e) => {
    if (!hasChanged) {
      var newPage = null;

      if (e.key === 'ArrowDown') {
        newPage = getNext();
      }

      if (e.key === 'ArrowUp') {
        newPage = getPrev();
      }

      if (newPage !== null) {
        hasChanged = true;
        location.href = newPage[1];
        setPage(newPage[0]);
      }
    }
  }, [getNext, getPrev, setPage, hasChanged]);

  // Handle scrolling
  const handleWheel = useCallback((e) => {
    if ((Date.now() - document.lastScroll > 500) && !hasChanged) {
      var newPage = null;

      if (e.deltaY > 4) {
        newPage = getNext();
      }
      
      if (e.deltaY < -4) {
        newPage = getPrev();
      }

      if (newPage !== null) {
        hasChanged = true;
        document.lastScroll = Date.now();
        location.href = newPage[1];
        setPage(newPage[0]);
      }
    }
  }, [getNext, getPrev, setPage, hasChanged, document.lastScroll]);

  // Remove old keyboard/mouse shortcuts
  document.removeEventListener('keyup', handleKeyup, false);
  document.removeEventListener('wheel', handleWheel, false);

  // Register keyboard/mouse shortcuts
  document.addEventListener('keyup', handleKeyup);
  document.addEventListener('wheel', handleWheel);

  return (
    <>
      <Head title={ page }/>

      <HiddenButton
        className='top-0'
        text='Skip to content'
        href='#content'
      />

      <Header page={ page } setPage={ setPage } />
      <Body page={ page } setPage={ setPage } />
      <Footer />

      <HiddenButton
        className='bottom-0'
        text='Back to top'
        href='#header'
      />
    </>
  )
}

client
  .createRoot( document.getElementById('root') )
  .render( <App /> );

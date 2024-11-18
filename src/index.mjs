import React, { useState } from 'react';
import client from 'react-dom/client';

import './build.css';

import { Head, Header, Footer, Body, HiddenButton } from './components';

function App() {
  // Get current page from URL
  function getCurrent() {
    const currentPage = location.href.match(/[?#](.*)/);
    if (currentPage) {
      switch (currentPage[1]) {
        case '':
          return 'Home';
        case 'about':
          return 'About';
        case 'resources':
          return 'Resources';
        case 'media-bundle':
          return 'Media Bundle';
        case 'faq':
          return 'FAQ';
        default:
          return 'Article' + Math.random();
      }
    }
    return 'Home';
  }

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
      default:
        return null;
    }
  }

  // Get previous page
  function getPrev() {
    switch (page) {
      case 'About':
        return ['Home', '#'];
      case 'Resources':
        return ['About', '#about'];
      case 'Media Bundle':
        return ['Resources', '#resources'];
      case 'FAQ':
        return ['Media Bundle', '#media-bundle'];
      default:
        return null;
    }
  }

  // Set starting page to page in URL
  const [page, setPage] = useState(getCurrent());

  // Handle keypress
  function handleKeyup(e) {
    // Arrow up and down
    if (!getCurrent().includes('Article')) {
      var newPage = null;

      if (e.key === 'ArrowDown') {
        newPage = getNext();
      }

      if (e.key === 'ArrowUp') {
        newPage = getPrev();
      }

      if (newPage !== null) {
        history.replaceState(null, '', newPage[1]);
        setPage(newPage[0]);
      }
    }

    // Enter key
    if (e.key === 'Enter') {
      document.activeElement.click();
    }
  }

  // Handle href change
  function handleHref(e) {
    var hash = location.href.match(/[?#](.*)/);
    hash = (hash) ? hash[1] : '';
    if (page === getCurrent()) {
      return;
    }
    else if (hash === 'header' || hash === 'content') {
      history.replaceState(null, '', e.oldURL);
    }
    else {
      setPage(getCurrent());
    }
  }

  // Register keyboard shortcuts
  onkeyup = handleKeyup;

  // Handle href change
  onhashchange = handleHref;

  return (
    <>
      <Head title={page} />

      <HiddenButton
        className="top-0"
        text="Skip to content"
        href="#content"
      />

      <Header page={page} setPage={setPage} />
      <Body page={page} setPage={setPage} />
      <Footer />

      <HiddenButton
        className="bottom-0"
        text="Back to top"
        href="#header"
      />
    </>
  );
}

client
  .createRoot(document.getElementById('root'))
  .render(<App />);

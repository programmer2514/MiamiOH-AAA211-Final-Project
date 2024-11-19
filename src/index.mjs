import React, { useState, createContext } from 'react';
import client from 'react-dom/client';

import './build.css';

import { getCurrentPage } from './pages';
import { registerEvents } from './events';
import { Head, Header, Footer, Body, HiddenButton } from './components';

export const PageContext = createContext('Home');

export default function App() {
  // Set starting page to page in URL
  const [page, setPage] = useState(getCurrentPage());

  // Setup event handlers
  registerEvents(page, setPage);

  return (
    <PageContext.Provider value={page}>

      <Head />

      <HiddenButton
        className="top-0"
        text="Skip to content"
        href="#content"
      />

      <Header />
      <Body />
      <Footer />

      <HiddenButton
        className="bottom-0"
        text="Back to top"
        href="#header"
      />
    </PageContext.Provider>
  );
}

client
  .createRoot(document.getElementById('root'))
  .render(<App />);

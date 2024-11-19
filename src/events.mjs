import { getCurrentPage, getNextPage, getPrevPage } from './pages';

// Handles keypress events
function handleKeypress(e, page) {
  // Arrow up and down
  if (!getCurrentPage().includes('Article')) {
    var newPage = null;

    if (e.key === 'ArrowDown') {
      newPage = getNextPage(page);
    }

    if (e.key === 'ArrowUp') {
      newPage = getPrevPage(page);
    }

    if (newPage !== null) {
      location.href = newPage;
    }
  }

  // Enter key
  if (e.key === 'Enter') {
    document.activeElement.click();
  }
}

// Handles page change events
function handlePageChange(e, page, setPage) {
  var hash = location.href.match(/[?#](.*)/);
  hash = (hash) ? hash[1] : '';
  if (page === getCurrentPage(hash)) {
    return;
  }
  else if (hash === 'header' || hash === 'content') {
    history.replaceState(null, '', e.oldURL);
  }
  else {
    setPage(getCurrentPage());
  }
}

// Registers event handlers
export function registerEvents(page, setPage) {
  onkeyup = e => handleKeypress(e, page);
  onhashchange = e => handlePageChange(e, page, setPage);
}

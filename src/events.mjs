import { getCurrentPage, getNextPage, getPrevPage } from './pages';

var currentDate = Date.now();
var touchStartY = -1;
var touchScrollY = -1;

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
  if (e.key === 'Enter' && document.activeElement.nodeName === 'INPUT') {
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

// Handles scrolling between pages
function handleScroll(e, page) {
  if (Math.abs(e.deltaY) > 10) {
    if (Date.now() - currentDate >= 250) {
      let newPage = null;
      let main = document.querySelector('main');

      if (e.wheelDeltaY > 0) {
        if (main.scrollTop === 0) {
          newPage = getPrevPage(page);
        }
      }
      else {
        if (main.scrollTop + main.offsetHeight === main.scrollHeight) {
          newPage = getNextPage(page);
        }
      }

      if (newPage !== null) {
        location.href = newPage;
      }
    }
    currentDate = Date.now();
  }
}

// Handles scrolling between pages on mobile
function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY;
  touchScrollY = document.querySelector('main').scrollTop;
}

function handleTouchMove(e, page) {
  let deltaY = (e.touches[0].clientY - touchStartY) / outerHeight;
  if (Math.abs(deltaY) > 0.1) {
    if (Date.now() - currentDate >= 250) {
      let newPage = null;
      let main = document.querySelector('main');

      if (deltaY > 0) {
        if (main.scrollTop === 0 && touchScrollY !== -1) {
          newPage = getPrevPage(page);
        }
      }
      else {
        if (main.scrollTop === touchScrollY) {
          newPage = getNextPage(page);
        }
      }

      if (newPage !== null) {
        location.href = newPage;
      }
    }
    currentDate = Date.now();
  }
}

function handleResize() {
  touchScrollY = -1;
}

// Registers event handlers
export function registerEvents(page, setPage) {
  onkeyup = e => handleKeypress(e, page);
  onwheel = e => handleScroll(e, page);
  onhashchange = e => handlePageChange(e, page, setPage);
  onresize = handleResize;

  document.ontouchstart = handleTouchStart;
  document.ontouchmove = e => handleTouchMove(e, page);
}

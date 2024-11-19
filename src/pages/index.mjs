export { default as PageAbout } from './About';
export { default as PageArticle } from './Article';
export { default as PageFAQ } from './FAQ';
export { default as PageHome } from './Home';
export { default as PageMediaBundle } from './MediaBundle';
export { default as PageResources } from './Resources';

// Gets the current page from the URL
export function getCurrentPage(currentPage = location.href.match(/[?#](.*)/)) {
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

// Gets the next page
export function getNextPage(page) {
  switch (page) {
    case 'Home':
      return '#about';
    case 'About':
      return '#resources';
    case 'Resources':
      return '#media-bundle';
    case 'Media Bundle':
      return '#faq';
    default:
      return null;
  }
}

// Gets the previous page
export function getPrevPage(page) {
  switch (page) {
    case 'About':
      return '#';
    case 'Resources':
      return '#about';
    case 'Media Bundle':
      return '#resources';
    case 'FAQ':
      return '#media-bundle';
    default:
      return null;
  }
}
